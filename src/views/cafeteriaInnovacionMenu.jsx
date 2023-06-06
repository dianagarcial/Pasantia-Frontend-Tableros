import React, { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import '../styles/principal.css'
import { ComboBoton } from '../components/btn-form'
import { Modulo2 } from '../components/modulo2'
import { CeldaModuloInput2 } from '../components/celda-modulo-input2'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../components/breadscrum'
import { useForm } from '../Hooks'
import { ComponetSelectPeriodo } from '../components/component-select-periodo'
import { ComponetSelectRestaurante } from '../components/component-select-restaurante'
import { usePlatosStore } from '../Hooks/usePlatosStore'
import Swal from 'sweetalert2'



const plato = {
  idRestaurante: '',
  idPeriodo: '',
  nombre: '',
  precio: '',


}

export const InnovacionMenu = () => {
  const [hover, setHover] = useState(false);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';
  const navigate = useNavigate();
  const { idRestaurante, nombre, precio, idPeriodo, onInputChange } = useForm(plato);
  const { startCreatingNewPlato } = usePlatosStore();

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
        navigate(`/Servicios-alimenticios/`)
      }
    })


  }



  const infoPlato = [
    <CeldaModuloInput2 name="nombre" value={nombre} onChange={onInputChange} type="text" titulo='Nombre del Plato*' placeholder='Ej:Plato 1' />,
    <CeldaModuloInput2 name="precio" value={precio} onChange={onInputChange} type="number" titulo='Precio*' placeholder='$0.00' />];


  const enviar = (e) => {
    e.preventDefault();
    if (idPeriodo === null || idPeriodo === '') {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo periodo este diligenciado',
       
      })

    } else if (idRestaurante === null || idRestaurante === '') {

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un problema al guardar la información',
        text: 'Por favor, verifique que el campo restaurante este diligenciado',
       
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
      const nombrex = formatearTextoOracion(nombre);
      startCreatingNewPlato({ nombrex, precio, idPeriodo, idRestaurante })

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
            Innovacion en el menú
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
              <ComponetSelectRestaurante titulo='Seleccione el restaurante*' type="text" name="idRestaurante" value={idRestaurante} onChange={onInputChange} />
            </div>

            {/* <ComboBotonAgregar onClickA={handleClick} /> */}

            <Modulo2 titulo='INFORMACIÓN PLATO' content={infoPlato} />
            {/* {componentes.map((componente, index) => (
                        <div key={index}>{componente}</div>
                    ))} */}

            <ComboBoton onClick={volver} />

          </form>
        </div>

      </div>
      <Footer />
    </div>


  )
}