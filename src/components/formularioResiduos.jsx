import { useNavigate } from "react-router-dom";
import { ComboBoton } from "./btn-form"
import Swal from "sweetalert2";
import { useForm } from "../Hooks";
import { useEffect, useState } from "react";
import { Modulo2 } from "./modulo2";
import { CeldaModuloInput2 } from "./celda-modulo-input2";
import { CeldaModuloSelect2Periodo } from "./celda-modulo-select2-periodo";
import { useResiduosStore } from "../Hooks/useResiduos";

const residuos = {
  fecha: '',
  idPeriodo: '',
  factura: '',
  rProceso: '',
  rCarga: ''
};

export const FormularioResiduos = ({ formularios }) => {

  const navigate = useNavigate();
  const { fecha, idPeriodo, factura, rProceso, rCarga, onInputChange } = useForm(residuos);
  const { startCreatingVentaResiduo } = useResiduosStore();

  const [formData, setFormData] = useState([]);
  const [formData2, setFormData2] = useState([]);
  const [formData3, setFormData3] = useState([]);
  const [formData4, setFormData4] = useState([]);
  const [formData5, setFormData5] = useState([]);
  const [formData6, setFormData6] = useState([]);
  console.log(formularios)




  const infoContrato = [

    <CeldaModuloInput2 titulo='Fecha' placeholder='*' type='date' name="fecha" value={fecha} onChange={onInputChange} />,
    <CeldaModuloSelect2Periodo titulo='Periodo' type="text" name="idPeriodo" value={idPeriodo} onChange={onInputChange} />,
    <CeldaModuloInput2 titulo='No. factura de venta' placeholder='Ej:A001' type="text" name="factura" value={factura} onChange={onInputChange} />];


  const infoResponsables = [
    <CeldaModuloInput2 titulo='Responsables del proceso' placeholder='Ej:Kevin' name="rProceso" value={rProceso} onChange={onInputChange} />,
    <CeldaModuloInput2 titulo='Responsable de la carga' placeholder='Ej:Diana' name="rCarga" value={rCarga} onChange={onInputChange} />];


  const formatearTextoOracion = (texto) => {
    const textoEnMinusculas = texto.toLowerCase();

    const textoFormateado = textoEnMinusculas.replace(/(^\w|\.\s\w)/g, (letra) => letra.toUpperCase());

    return textoFormateado;
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
      iconHtml: '<img src="/images/warning.png" style="width: 1em; height: 1em;" />',

      showCancelButton: true,
      confirmButtonText: 'Acepto',
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
        navigate(`/`)
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
  const handleChange4 = (e, index) => {
    const { name, value } = e.target;
    setFormData4((prevData) =>
      prevData.map((data, i) => (i === index ? { ...data, [name]: value } : data))
    );
  };
  const handleChange5 = (e, index) => {
    const { name, value } = e.target;
    setFormData5((prevData) =>
      prevData.map((data, i) => (i === index ? { ...data, [name]: value } : data))
    );
  };
  const handleChange6 = (e, index) => {
    const { name, value } = e.target;
    setFormData6((prevData) =>
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

    if (fecha === null || fecha === '' || idPeriodo === null || idPeriodo === '' || factura === null || factura === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el primer bloque de informacion de recoleccion esta diligenciado',
        
      })

    } else if (rProceso === null || rProceso === '' || rCarga === null || rCarga === '') {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el ultimo bloque de responsables esta diligenciado',
       
      })

    } else {
      const formDataf = formData.map((p) => {
        if (p.cant !== "" && p.vlr !== "") {
          return {
            idMaterial: parseInt(p.id),
            cantidad: parseFloat(p.cant),
            valorUnidad: parseFloat(p.vlr),
            fechaRegistro: fechaEs,
            recoleccion: {
              idPeriodo: parseInt(idPeriodo),
              fecha: fecha,
              responsableProceso: rProceso,
              responsableCargue: rCarga,
              numeroFacturaVenta: factura
            }
          }
        } else {
          return null;
        }
      }).filter(Boolean);

      console.log(formDataf)

      const formData2f = formData2.map((p) => {
        if (p.cant !== "" && p.vlr !== "") {
          return {
            idMaterial: parseInt(p.id),
            cantidad: parseFloat(p.cant),
            valorUnidad: parseFloat(p.vlr),
            fechaRegistro: fechaEs,
            recoleccion: {
              idPeriodo: parseInt(idPeriodo),
              fecha: fecha,
              responsableProceso: rProceso,
              responsableCargue: rCarga,
              numeroFacturaVenta: factura
            }
          }
        } else {
          return null;
        }
      }).filter(Boolean);

      console.log(formData2f)

      const formData3f = formData3.map((p) => {
        if (p.cant !== "" && p.vlr !== "") {
          return {
            idMaterial: parseInt(p.id),
            cantidad: parseFloat(p.cant),
            valorUnidad: parseFloat(p.vlr),
            fechaRegistro: fechaEs,
            recoleccion: {
              idPeriodo: parseInt(idPeriodo),
              fecha: fecha,
              responsableProceso: rProceso,
              responsableCargue: rCarga,
              numeroFacturaVenta: factura
            }
          }
        } else {
          return null;
        }
      }).filter(Boolean);

      console.log(formData3f)

      const formData4f = formData4.map((p) => {
        if (p.cant !== "" && p.vlr !== "") {
          return {
            idMaterial: parseInt(p.id),
            cantidad: parseFloat(p.cant),
            valorUnidad: parseFloat(p.vlr),
            fechaRegistro: fechaEs,
            recoleccion: {
              idPeriodo: parseInt(idPeriodo),
              fecha: fecha,
              responsableProceso: rProceso,
              responsableCargue: rCarga,
              numeroFacturaVenta: factura
            }
          }
        } else {
          return null;
        }
      }).filter(Boolean);

      console.log(formData4f)

      const formData5f = formData5.map((p) => {
        if (p.cant !== "" && p.vlr !== "") {
          return {
            idMaterial: parseInt(p.id),
            cantidad: parseFloat(p.cant),
            valorUnidad: parseFloat(p.vlr),
            fechaRegistro: fechaEs,
            recoleccion: {
              idPeriodo: parseInt(idPeriodo),
              fecha: fecha,
              responsableProceso: rProceso,
              responsableCargue: rCarga,
              numeroFacturaVenta: factura
            }

          }
        } else {
          return null;
        }
      }).filter(Boolean);

      console.log(formData5f)

      const formData6f = formData6.map((p) => {
        if (p.cant !== "" && p.vlr !== "") {
          return {
            idMaterial: parseInt(p.id),
            cantidad: parseFloat(p.cant),
            valorUnidad: parseFloat(p.vlr),
            fechaRegistro: fechaEs,
            recoleccion: {
              idPeriodo: parseInt(idPeriodo),
              fecha: fecha,
              responsableProceso: rProceso,
              responsableCargue: rCarga,
              numeroFacturaVenta: factura
            }
          }
        } else {
          return null;
        }
      }).filter(Boolean);

      console.log(formData6f)




      const allVentas = formDataf.concat(formData2f, formData3f, formData4f, formData5f, formData6f);


      console.log(allVentas)

      if (allVentas.length > 0) {
        startCreatingVentaResiduo(allVentas)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un problema al guardar la información',
          text: 'Por favor, verifique que ingreso la cantidad y el valor por unidad de al menos un material',
          
        })

      }


    }

  };

  useEffect(() => {
    if (formularios.current !== undefined) {
      const form1 = formularios.current[0]?.material.map(
        (p) => ({
          id: p.idMaterial,
          cant: '',
          vlr: '',
          idResiduo: '1'
        })
      )
      const form2 = formularios.current[1]?.material.map(
        (p) => ({
          id: p.idMaterial,
          cant: '',
          vlr: '',
          idResiduo: '2'
        })
      )

      const form3 = formularios.current[2]?.material.map(
        (p) => ({
          id: p.idMaterial,
          cant: '',
          vlr: '',
          idResiduo: '3'
        })
      )
      const form4 = formularios.current[3]?.material.map(
        (p) => ({
          id: p.idMaterial,
          cant: '',
          vlr: '',
          idResiduo: '4'
        })
      )
      const form5 = formularios.current[4]?.material.map(
        (p) => ({
          id: p.idMaterial,
          cant: '',
          vlr: '',
          idResiduo: '5'
        })
      )
      const form6 = formularios.current[5]?.material.map(
        (p) => ({
          id: p.idMaterial,
          cant: '',
          vlr: '',
          idResiduo: '6'
        })
      )


      setFormData(form1)
      setFormData2(form2)
      setFormData3(form3)
      setFormData4(form4)
      setFormData5(form5)
      setFormData6(form6)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formularios.current])

  return (
    (<form onSubmit={handleSubmit}>

      <Modulo2 titulo='INFORMACION DE LA RECOLECCION' content={infoContrato} />
      <div className='modulo'>

        <div className='titulo-bloque' >
          <h2>{formularios.current && formularios.current[0]?.nResiduo.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData && formData.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[0]?.material[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-input-45'>
                        <input className='input-p'
                          type="number"
                          name="cant"
                          placeholder="Cantidad (KG)"
                          value={data.cant}
                          onChange={(e) => handleChange(e, index)}
                        />

                      </div>
                      <div className='div-input'>

                        <input className='input-p'
                          type="number"
                          name="vlr"
                          placeholder="Valor Unidad ($COP)"
                          value={data.vlr}
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
          <h2>{formularios.current && formularios.current[1]?.nResiduo.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData2 && formData2.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[1]?.material[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-input-45'>
                        <input className='input-p'
                          type="number"
                          name="cant"
                          placeholder="Cantidad (KG)"
                          value={data.cant}
                          onChange={(e) => handleChange2(e, index)}
                        />

                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="number"
                          name="vlr"
                          placeholder="Valor Unidad ($COP)"
                          value={data.vlr}
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
          <h2>{formularios.current && formularios.current[2]?.nResiduo.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData3 && formData3.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[2]?.material[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-input-45'>
                        <input className='input-p'
                          type="number"
                          name="cant"
                          placeholder="Cantidad (KG)"
                          value={data.cant}
                          onChange={(e) => handleChange3(e, index)}
                        />

                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="number"
                          name="vlr"
                          placeholder="Valor Unidad ($COP)"
                          value={data.vlr}
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

      <div className='modulo'>

        <div className='titulo-bloque' >
          <h2>{formularios.current && formularios.current[3]?.nResiduo.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData4 && formData4.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[3]?.material[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-input-45'>
                        <input className='input-p'
                          type="number"
                          name="cant"
                          placeholder="Cantidad (KG)"
                          value={data.cant}
                          onChange={(e) => handleChange4(e, index)}
                        />

                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="number"
                          name="vlr"
                          placeholder="Valor Unidad ($COP)"
                          value={data.vlr}
                          onChange={(e) => handleChange4(e, index)}
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
          <h2>{formularios.current && formularios.current[4]?.nResiduo.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData5 && formData5.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[4]?.material[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-input-45'>
                        <input className='input-p'
                          type="number"
                          name="cant"
                          placeholder="Cantidad (KG)"
                          value={data.cant}
                          onChange={(e) => handleChange5(e, index)}
                        />

                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="number"
                          name="vlr"
                          placeholder="Valor Unidad ($COP)"
                          value={data.vlr}
                          onChange={(e) => handleChange5(e, index)}
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
          <h2>{formularios.current && formularios.current[5]?.nResiduo.toUpperCase()}</h2>
        </div>

        <div className='cajon'>

          <div className='contenido'>
            <div className='celda'>
              <div className='form-modulo-contenedor'>
                {formData6 && formData6.map((data, index) => (
                  <div className='celda-form-modulo' key={index}>
                    <div className='celda-form-modulo-h2'>
                      <h2>{formatearTextoOracion(formularios.current[5]?.material[index]?.nombre.toString())}</h2>
                    </div>
                    <div className='cajon-opt'>
                      <div className='div-input-45'>
                        <input className='input-p'
                          type="number"
                          name="cant"
                          placeholder="Cantidad (KG)"
                          value={data.cant}
                          onChange={(e) => handleChange6(e, index)}
                        />

                      </div>
                      <div className='div-input'>
                        <input className='input-p'
                          type="number"
                          name="vlr"
                          placeholder="Valor Unidad ($COP)"
                          value={data.vlr}
                          onChange={(e) => handleChange6(e, index)}
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

      <Modulo2 titulo='RESPONSABLES' content={infoResponsables} />


      <ComboBoton onClick={volver} />
    </form>)
  )
}
