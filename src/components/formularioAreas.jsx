import { useNavigate } from "react-router-dom";
import { ComboBoton } from "./btn-form"
import { ComponetSelectPeriodo } from "./component-select-periodo"
import { ComponetSelectRestaurante } from "./component-select-restaurante"
import { ComSelectCalificacion } from "./select-calificacion"
import Swal from "sweetalert2";
import { useForm } from "../Hooks";
import { useDetalleEvaluacionStore } from "../Hooks/useDetalleEvaluacion";
import { useEffect, useState } from "react";


const calidad = {
  idPeriodo: '',
  idRestaurante: '',
};

export const FormularioAreas = ({ formularios }) => {

  const navigate = useNavigate();
  const { idPeriodo, idRestaurante, onInputChange } = useForm(calidad);
  const { startCreatingNewEvaluacion } = useDetalleEvaluacionStore();
  const [formData, setFormData] = useState([]);
  const [formData2, setFormData2] = useState([]);
  const [formData3, setFormData3] = useState([]);

  const formatearTextoOracion = (texto) => {
    const textoEnMinusculas = texto.toLowerCase();

    const textoFormateado = textoEnMinusculas.replace(/(^\w|\.\s\w)/g, (letra) => letra.toUpperCase());
    const txtF = textoFormateado + '*'
    return txtF;
  }

  const volver = (e) => {
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de cancelar el formulario',
      text: "Se borrara toda la informacion diligenciada hasta el momento",
      iconHtml: '<img src="/images/warning.png" style="width: 1em;height: 1em;border: 0;" />',
      showCancelButton: true,
      confirmButtonText: 'Abandonar',
      cancelButtonText: 'Volver',
      confirmButtonColor: '#A60F1B',
      cancelButtonColor: '#978F8F',
      customClass: {
        confirmButton: "swal-button-confirm",
        cancelButton: "swal-button-cancel",
        popup: "swal-custom",
      },
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/Servicios-alimenticios/`)
      }
    })


  }

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    setFormData((prevData) =>
      prevData.map((data, i) => (i === index ? { ...data, [name]: value } : data))
    );
  };

  const handleChange2 = (e, index) => {
    const { name, value } = e.target;
    setFormData2((prevData) =>
      prevData.map((data, i) => (i === index ? { ...data, [name]: value } : data))
    );
  };

  const handleChange3 = (e, index) => {
    const { name, value } = e.target;
    setFormData3((prevData) =>
      prevData.map((data, i) => (i === index ? { ...data, [name]: value } : data))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();

    const fechaEs = `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia
      }`;


    const idRestaurantex = parseInt(idRestaurante)
    const idPeriodox = parseInt(idPeriodo)






    if ( isNaN(idRestaurante) || idRestaurante === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo restaurante este diligenciado',
        
      })
     

    } else if (isNaN(idPeriodo) || idPeriodo === '') {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo periodo este diligenciado',
        
      })

    } else {
      const cali1 = formData.map((p) => {

        return {
          idArea: p.idArea,
          idCalificacion: p.cal,
          idPregunta: p.id,
          evCalidad: {
            periodoAcademico: {
              idPeriodo: idPeriodox
            },
            restaurante: {
              idRestaurante: idRestaurantex
            },
            fecha: fechaEs
          },
          observaciones: p.obs

        }
      });



      const cali2 = formData2.map((p) => {
        return {
          idArea: p.idArea,
          idCalificacion: p.cal,
          idPregunta: p.id,
          evCalidad: {
            periodoAcademico: {
              idPeriodo: idPeriodo
            },
            restaurante: {
              idRestaurante: idRestaurante
            },
            fecha: fechaEs
          },
          observaciones: p.obs

        }
      });

      const cali3 = formData3.map((p) => {
        return {
          idArea: p.idArea,
          idCalificacion: p.cal,
          idPregunta: p.id,
          evCalidad: {
            periodoAcademico: {
              idPeriodo: idPeriodo
            },
            restaurante: {
              idRestaurante: idRestaurante
            },
            fecha: fechaEs
          },
          observaciones: p.obs

        }
      });

      const allCalificaciones = cali1.concat(cali2, cali3);
      console.log(allCalificaciones)

      startCreatingNewEvaluacion(allCalificaciones)

    }
  };

  useEffect(() => {
    if (formularios.current !== undefined) {
      const form1 = formularios.current[0]?.preguntas.map(
        (p) => ({
          id: p.idPunto,
          cal: '',
          obs: '',
          idArea: '1'
        })
      )
      const form2 = formularios.current[1]?.preguntas.map(
        (p) => ({
          id: p.idPunto,
          cal: '',
          obs: '',
          idArea: '2'
        })
      )

      const form3 = formularios.current[2]?.preguntas.map(
        (p) => ({
          id: p.idPunto,
          cal: '',
          obs: '',
          idArea: '3'
        })
      )


      setFormData(form1)
      setFormData2(form2)
      setFormData3(form3)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formularios.current])

  return (
    (<form onSubmit={handleSubmit}>
      <ComponetSelectPeriodo titulo='Seleccione el periodo*' type="text" name="idPeriodo" value={idPeriodo} onChange={onInputChange} />
      <ComponetSelectRestaurante titulo='Seleccione el restaurante*' type="text" name="idRestaurante" value={idRestaurante} onChange={onInputChange} />

      <div className='modulo'>

        <div className='titulo-bloque' >
          <h2>{formularios.current && formularios.current[0]?.narea.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData && formData.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[0]?.preguntas[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-select'>
                        <ComSelectCalificacion type="text" name="cal" value={data.cal} onChange={(e) => handleChange(e, index)} />
                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="text"
                          name="obs"
                          placeholder="Observación"
                          value={data.obs}
                          onChange={(e) => handleChange(e, index)}
                        />

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='modulo'>

        <div className='titulo-bloque' >
          <h2>{formularios.current && formularios.current[1]?.narea.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData && formData2.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[1]?.preguntas[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-select'>
                        <ComSelectCalificacion type="text" name="cal" value={data.cal} onChange={(e) => handleChange2(e, index)} />
                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="text"
                          name="obs"
                          placeholder="Observación"
                          value={data.obs}
                          onChange={(e) => handleChange2(e, index)}
                        />

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='modulo'>

        <div className='titulo-bloque' >
          <h2>{formularios.current && formularios.current[2]?.narea.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData3 && formData3.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[2]?.preguntas[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-select'>
                        <ComSelectCalificacion type="text" name="cal" value={data.cal} onChange={(e) => handleChange3(e, index)} />
                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="text"
                          name="obs"
                          placeholder="Observación"
                          value={data.obs}
                          onChange={(e) => handleChange3(e, index)}
                        />

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComboBoton onClick={volver} />
    </form>)
  )
}
