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
import { usePlatosStore } from '../Hooks/usePlatosStore'
import Swal from 'sweetalert2'
import { useRestaurantesStore } from '../Hooks/useRestaurantesStore'
import { useSelector } from 'react-redux'



const plato = {
  idRestaurante: '',
  idPeriodo: '',
  nombre: '',
  precio: '',


}




export const EdicionPrecioUAO = () => {
  const [hover, setHover] = useState(false);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';
  const navigate = useNavigate();
  const { precio, idPeriodo, onInputChange } = useForm(plato);
  const { startEditarplato } = usePlatosStore();
  const { startgetRestaurantesPlato } = useRestaurantesStore();
  const { restaurantePlato } = useSelector(state => state.restaurantes);
  const [platos, setPlatos] = useState([]);
  const [restauranteSeleccionado, setRestauranteSeleccionado] = useState(null);
  const [platoSeleccionado, setPlatoSeleccionado] = useState(null);




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
        navigate(`/Edicion-Parametros/Servicios-alimenticios`)
      }
    })


  }





  const enviar = (e) => {
    e.preventDefault();
    console.log(platoSeleccionado)
    console.log(restauranteSeleccionado)
    console.log(idPeriodo)
    console.log(precio)
    if (idPeriodo === null || idPeriodo === '') {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo periodo este diligenciado',
       
      })

      
    } else if (restauranteSeleccionado === null || restauranteSeleccionado === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo restaurante este diligenciado',
        
      })
    } else if (platoSeleccionado === null || platoSeleccionado === '') {

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
      startEditarplato({ platoSeleccionado, precio, idPeriodo })

    }




  };
  const handleRestauranteChange = (event) => {
    const restauranteId = parseInt(event.target.value);
    console.log(restauranteId)
    const restauranteSeleccionado = restaurantePlato.find(restaurante => restaurante.idRestaurante === restauranteId);
    console.log(restauranteSeleccionado)
    if (restauranteSeleccionado) {
      setRestauranteSeleccionado(restauranteSeleccionado);

      if (restauranteSeleccionado.platos) {
        setPlatos(restauranteSeleccionado.platos);
      } else {
        setPlatos([]);
      }
    }
  };

  const handlePlatoChange = (event) => {
    const platoId = parseInt(event.target.value);
    console.log(platoId)
    // const restauranteSeleccionado = restaurantePlato.find(restaurante => restaurante.idRestaurante === restauranteId);
    // console.log(restauranteSeleccionado)
    if (platoId) {
      setPlatoSeleccionado(platoId);


    } else {
      setPlatoSeleccionado(null)
    }
  };



  useEffect(() => {

    startgetRestaurantesPlato();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            Nuevo precio plato UAO
          </div>

        </div>

        <div className='div-contenido'>
          <form onSubmit={enviar}>

            <div className='div-titulos'>

              <h2>Diligencia la información necesaria para ingresar un nuevo precio para el plato</h2>

            </div>

            <div>
              <ComponetSelectPeriodo titulo='Seleccione el periodo*' type="text" name="idPeriodo" value={idPeriodo} onChange={onInputChange} />
            </div>
            <div>
              <div className='div-component-select-r'>
                <div className='component-select'>
                  <form className='form-component-select'>
                    <div className='form-component-select-h3'>
                      <h3>Selecciona el restaurante*</h3>
                    </div>
                    <div className='form-component-select-sel'>
                      <select id="restaurante" onChange={handleRestauranteChange} className='input-p'>
                        <option value="">Selecciona un restaurante</option>
                        {restaurantePlato.map(restaurante => (
                          <option key={restaurante.idRestaurante} value={restaurante.idRestaurante}>
                            {restaurante.nombre}
                          </option>
                        ))}
                      </select>
                    </div>


                  </form>
                </div>
              </div>

            </div>


            {restauranteSeleccionado && (

              <div className='modulo'>
                <div className='titulo-bloque' >
                  <h2>INFORMACION DEL PLATO</h2>


                </div>

                <div className='cajon'>

                  <div className='contenido'>
                    <div className='celda'>
                      <div>
                        <div className='celda-modulo'>
                          <form className='form-modulo'>

                            <div className='form-modulo-contenedor'>

                              <div className='celda-form-modulo'>
                                <div className='celda-form-modulo-h2-2'>
                                  <h2>Nombre plato*</h2>
                                </div>
                                <div className='div-input-50'>
                                  <select id="plato" onChange={handlePlatoChange}>
                                    <option value="">Selecciona un plato</option>
                                    {platos.map(plato => (
                                      <option key={plato.idPlato} value={plato.idPlato}>
                                        {plato.nombre}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                              </div>





                            </div>




                          </form>
                        </div>
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