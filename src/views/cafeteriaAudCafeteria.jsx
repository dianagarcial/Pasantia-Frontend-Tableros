import React, { useEffect, useRef, useState } from "react";
import { usePeriodosStore } from "../Hooks/usePeriodosStore";
import { useAreasStore } from "../Hooks";
import { useSelector } from "react-redux";
import { FormularioAreas } from "../components/formularioAreas";
import { Breadcrumbs } from '../components/breadscrum'
import { NavBar } from "../components/navBar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";


export const AuditoriaCafeteria = () => {

  const navigate = useNavigate();
  const { startgetPeriodo } = usePeriodosStore();
  const { startgetAreas } = useAreasStore();
  const [hover, setHover] = useState(false);
  const { areas } = useSelector(state => state.areas);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';
  // eslint-disable-next-line react-hooks/exhaustive-deps
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


  const conjuntoPreguntas = useRef();

  useEffect(() => {
    startgetAreas()    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (areas) {
      conjuntoPreguntas.current = areas.map(
        (a) => (
          {
            area: a?.idArea,
            narea: a?.nombre,
            preguntas: [...a?.preguntas]
          }
        )
      );
    }
  }, [areas])

  useEffect(() => {
    startgetPeriodo()
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
            <div className='col-h1-principal-sac'>
           Formato de inspección interna y/o externa concesiones
            </div>


          </div>
          <div className='div-contenido'>

            <div className='div-titulos'>
              <h2>Realice la calificacion de cada item, para las calificaciones se tiene la siguiente escala<br />
                CUMPLE=2; CUMPLE PARCIALMENTE=1; NO CUMPLE=0; N.A=NO APLICA <br/>
                Puede diligenciar campo observación para el item que lo requiera, este campo no es obligatorio </h2>
            </div>
            <div className='principal-modulo2'>
            <FormularioAreas formularios={conjuntoPreguntas} />
            </div>
          </div>
        </div>

    <Footer/>
      </div>
    </>
  )
}


