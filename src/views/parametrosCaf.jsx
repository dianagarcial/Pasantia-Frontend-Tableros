import React, { useState } from 'react';
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import '../styles/principal.css'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';
import { Procedimiento2 } from '../components/procedimiento-select';
import { Breadcrumbs } from '../components/breadscrum';

export const ParametrosCafeteria = () => {

  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const src = hover ? '/images/volver-hover.png' : '/images/volver.png';

  const contenidos = ([

    { id: 'Edicion-Precio-UAO', nombre: 'Edicion de precio en el menú' },
    { id: 'Creacion-Universidad', nombre: 'Universidades referentes' },
    { id: 'Creacion-Restaurante', nombre: 'Restaurantes referentes' }
  ])

  const volver = (e) => {
    e.preventDefault();
    navigate(`/Edicion-Parametros`)
  }
  


  const ver = (e, href) => {
    e.preventDefault();
    console.log(href);
    navigate(href)

  };

  const listaContenido = contenidos.map(contenido => (

    <div key={contenido.id} className='list-button'>

      <button className='list-button' onClick={(e) => ver(e, '/Edicion-Parametros/Servicios-alimenticios/' + contenido.id)} >
        <div className='list-button-div'>
          <div className='contenido-a'>
            <h2 id="contenido-a">{contenido.nombre}</h2>
          </div>
          <div className='contenido-flecha'>
            <img src='/images/flecha.png' alt='fecha'></img>
          </div>
        </div>
      </button>

    </div>

  ));


  return (
    <div className="contenido">

      <NavBar />
      <div className='principal'>
        <Breadcrumbs />

        <div className='col-principal'>

          <button onClick={volver} id="volver" >
            <img
              src={src}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              alt="volver" id='volver'
            />
          </button>

        </div>
        <div className='procedimientos'>

          <Procedimiento2 img='/images/procedimientos/restaurantes2.png' titulo={'Servicios alimenticios, productos Institucionales y consumo básico.'} />
          <div className='div-ul'>

            {listaContenido}


          </div>


        </div>
      </div>
      <Footer />

    </div>


  )
}