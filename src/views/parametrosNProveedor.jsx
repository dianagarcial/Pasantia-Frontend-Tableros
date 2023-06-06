import React, { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import '../styles/principal.css'
import { ComboBoton } from '../components/btn-form'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../components/breadscrum'
import { useForm } from '../Hooks'
import { useProvedoresStore } from '../Hooks/useProveedoresStore'
import { ComponetModuloInput } from '../components/component-modulo-input'
import Swal from 'sweetalert2'

const proveedor = {
  nombre: ''

}

export const NProveedor = () => {
  const { nombre, onInputChange } = useForm(proveedor);
  const [hover, setHover] = useState(false);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';
  const { startCreatingNewProveedor } = useProvedoresStore();


  const navigate = useNavigate();
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
        navigate(`/Edicion-Parametros/`)
      }
    })


  }

  const enviar = (e) => {
    e.preventDefault();
    const nombrex = formatearTextoOracion(nombre)
    startCreatingNewProveedor({ nombrex })

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
          <div className='col-h1-principal-sac'>Crear nuevo proveedor de movilidad</div>

        </div>
        <div className='div-contenido'>
          <form onSubmit={enviar}>
            <div className='div-titulos'>

              <h2>Ingrese la informacion del proveedor</h2>

            </div>
            <div>
              <ComponetModuloInput titulo='Nombre*' type="text" name="nombre" value={nombre} onChange={onInputChange} />
            </div>

            <ComboBoton onClick={volver} />
          </form>
        </div>

      </div>
      <Footer />

    </div >


  )
}