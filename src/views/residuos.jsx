import React, { useEffect, useRef, useState } from 'react'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import '../styles/principal.css'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../components/breadscrum'
import { usePeriodosStore } from '../Hooks/usePeriodosStore'
import { useSelector } from 'react-redux'
import { useResiduosStore } from '../Hooks/useResiduos'
import { FormularioResiduos } from '../components/formularioResiduos'
import Swal from 'sweetalert2'

export const AprovechamientoResiduos = () => {
  const [hover, setHover] = useState(false);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';
  const navigate = useNavigate();

  const { residuos } = useSelector(state => state.residuos)
  const { startgetPeriodo } = usePeriodosStore();
  const { startgetResiduos } = useResiduosStore();



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
        navigate(`/`)
      }
    })


  }



  const conjuntoResiduos = useRef();

  useEffect(() => {
    if (residuos) {
      conjuntoResiduos.current = residuos.map(
        (r) => (
          {
            idTRidTR: r?.idTipoResiduo,
            nResiduo: r?.nombre,
            material: [...r?.material]
          }
        )
      );
    }
  }, [residuos])

  useEffect(() => {
    startgetPeriodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    startgetResiduos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <>
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
            <div className='col-h1-principal-sac'>Aprovechamiento de residuos</div>

          </div>



          <div className='div-contenido'>



            <div className='principal-modulo2'>



              <FormularioResiduos formularios={conjuntoResiduos} />




            </div>



          </div>


        </div>
        <Footer />
      </div>

    </>
  )
}