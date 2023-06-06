import React, { useState } from 'react';
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import { Procedimiento } from '../components/procedimiento'
import '../styles/principal.css'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/breadscrum';
import { ProcedimientoG } from '../components/procedimiento-g';


export const Inicio = () => {


  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';


  const volver = (e) => {
    e.preventDefault();
    navigate(`/`)
  }

  const ver1 = (e) => {
    e.preventDefault();
    navigate(`/Servicios-alimenticios`)

  }
  const ver2 = (e) => {
    e.preventDefault();
    navigate(`/Gastos-Movilidad`)

  }
  const ver3 = (e) => {
    e.preventDefault();
    navigate(`/Aprovechamiento-Residuos`)

  }
  const ver4 = (e) => {
    e.preventDefault();
    navigate(`/Edicion-Parametros`)

  }


  return (
    <div className="contenido">

      <NavBar />
      <div className='principal'>
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


        </div>
        <div className='procedimientos'>

          <Procedimiento onclick={ver1} img='/images/procedimientos/restaurantes.png' titulo={'Servicios alimenticios, productos Institucionales y consumo básico.'} />
          <Procedimiento onclick={ver2} img='/images/procedimientos/movilidad.png' titulo={'Movilidad de pasajeros y activos.'} />
          <Procedimiento onclick={ver3} img='/images/procedimientos/residuos.png' titulo={'Gestión de residuos.'} />
          <ProcedimientoG onclick={ver4} img='/images/procedimientos/herramienta.png' titulo={'Edición de parametros'} />
        </div>
      </div>
      <Footer />

    </div>


  )
}