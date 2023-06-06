import React, { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import '../styles/principal.css'
import { ComboBoton } from '../components/btn-form'
import { CeldaModuloInput2 } from '../components/celda-modulo-input2'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../components/breadscrum'
import { useForm } from '../Hooks'
import { ComponetSelectPeriodo } from '../components/component-select-periodo'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import { useUniversidadesStore } from '../Hooks/useUniversidadesStore'
import { usePlatosCompetenciaStore } from '../Hooks/usePlatosCompetenciaStore'



const plato = {
  idRestaurante: '',
  idPeriodo: '',
  idUniversidad: '',
  nombre: '',
  precio: '',


}




export const Competitividad = () => {
  const [hover, setHover] = useState(false);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';
  const navigate = useNavigate();
  const { nombre, precio, idPeriodo, onInputChange } = useForm(plato);
  const { startCreatingNewPlatoCompetencia } = usePlatosCompetenciaStore();
  const { startgetUniversidadesRes } = useUniversidadesStore();
  const { universidadesCompRes } = useSelector(state => state.universidadesComp);
  const [universidadSeleccionada, setUniversidadSeleccionada] = useState(null);
  const [restaurantesComp, setRestaurantesComp] = useState([]);
  const [restaCompSeleccionado, setRestaCompSeleccionado] = useState(null);


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
        navigate(`/Servicios-alimenticios`)
      }
    })


  }





  const enviar = (e) => {
    e.preventDefault();
    // console.log(restaCompSeleccionado)
    // console.log(universidadSeleccionada)
    // console.log(nombre)
    // console.log(idPeriodo)
    // console.log(precio)
    if (idPeriodo === null || idPeriodo === '') {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo periodo este diligenciado',
       
      })

    } else if (universidadSeleccionada === null || universidadSeleccionada === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que ha seleccionado una universidad valida',
        
      })
    } else if (restaCompSeleccionado === null || restaCompSeleccionado === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que ha seleccionado un restaurante valido',
        
      })
    } else if (nombre === null || nombre === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo del nombre del plato este diligenciado',
        
      })
    } else if (precio === null || precio === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo del precio del plato este diligenciado',
        
      })
    } else {
      const idRestauranteCompetencia = parseInt(restaCompSeleccionado)
      const nombrex = formatearTextoOracion(nombre)
      const idPeriodox = parseInt(idPeriodo)
      const preciox = parseFloat(precio)
      startCreatingNewPlatoCompetencia({ idRestauranteCompetencia, nombrex, preciox, idPeriodox })


    }




  };
  const handleUniversidadChange = (event) => {
    const universidadId = parseInt(event.target.value);
    console.log(universidadId)
    const universidadSeleccionada = universidadesCompRes.find(universidad => universidad.idUniversidad === universidadId);
    console.log(universidadSeleccionada)
    if (universidadSeleccionada) {
      setUniversidadSeleccionada(universidadSeleccionada);

      if (universidadSeleccionada.restaurantes) {
        setRestaurantesComp(universidadSeleccionada.restaurantes);
      } else {
        setRestaurantesComp([]);
      }
    }
  };

  const handleRestauranteCompChange = (event) => {
    const restaComp = parseInt(event.target.value);
    console.log(restaComp)
    // const restauranteSeleccionado = restaurantePlato.find(restaurante => restaurante.idRestaurante === restauranteId);
    // console.log(restauranteSeleccionado)
    if (restaComp) {
      setRestaCompSeleccionado(restaComp);


    } else {
      setRestaCompSeleccionado(null)
    }
  };



  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
      return '¿Estás seguro de que deseas abandonar esta página?';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    startgetUniversidadesRes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="contenido">

      <NavBar />
      <div className='principal-fondo'>
        <Breadcrumbs />
        <div className='col-principal'>

          <button onClick={volver} id="volver">
            <img
              src={src}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              alt="volver" id='volver'
            />
          </button>
          <div className='col-h1-principal-sac'>
            Nuevo plato de universidad referente
          </div>

        </div>

        <div className='div-contenido'>
          <form onSubmit={enviar}>

            <div className='div-titulos'>

              <h2>Diligencia la información necesaria para crear el plato</h2>

            </div>

            <div>
              <ComponetSelectPeriodo titulo='Seleccione el periodo*' type="text" name="idPeriodo" value={idPeriodo} onChange={onInputChange} />
            </div>
            <div>
              <div className='div-component-select-u-n'>
                <div className='component-select'>
                  <form className='form-component-select'>
                    <div className='form-component-select-h3'>
                      <h3>Selecciona la universidad*</h3>
                    </div>
                    <div className='form-component-select-sel'>
                      <select id="universidad" onChange={handleUniversidadChange} className='input-p'>
                        <option value="">Selecciona una universidad</option>
                        {universidadesCompRes.map(universidades => (
                          <option key={universidades.idUniversidad} value={universidades.idUniversidad}>
                            {universidades.nombre}
                          </option>
                        ))}
                      </select>
                    </div>


                  </form>
                </div>
              </div>

            </div>
            {universidadSeleccionada && (

              <div>
                <div className='div-component-select'>
                  <div className='component-select'>
                    <form className='form-component-select'>
                      <div className='form-component-select-h3'>
                        <h3>Selecciona el restaurante*</h3>
                      </div>
                      <div className='form-component-select-sel'>
                        <select id="restaurante" onChange={handleRestauranteCompChange}>
                          <option value="">Selecciona un restaurante</option>
                          {restaurantesComp.map(restaurante => (
                            <option key={restaurante.idRestaurante} value={restaurante.idRestaurante}>
                              {restaurante.nombreRestaurante}
                            </option>
                          ))}
                        </select>
                      </div>


                    </form>
                  </div>
                </div>

              </div>
            )}


            {restaCompSeleccionado && (
              <div className='modulo'>
                <div className='titulo-bloque' >
                  <h2>INFORMACION DEL PLATO</h2>


                </div>

                <div className='cajon'>

                  <div className='contenido'>
                    <div className='celda'>
                      <div>


                        <CeldaModuloInput2 name="nombre" value={nombre} onChange={onInputChange} type="text" titulo='Nombre*' placeholder='Ej: Plato1' />
                        <CeldaModuloInput2 name="precio" value={precio} onChange={onInputChange} type="number" titulo='Precio*' placeholder='$0.00' />

                      </div>

                    </div>
                  </div>


                </div>
              </div>
            )}




            <ComboBoton onClick={volver} />

          </form>
        </div>

      </div>
      <Footer />
    </div>


  )
}