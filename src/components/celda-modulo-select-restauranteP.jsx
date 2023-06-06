import React, { useState, useEffect } from 'react';
import { useRestaurantesStore } from '../Hooks/useRestaurantesStore';

import { useSelector } from 'react-redux';

export const CeldaModuloSelectRestauranteP = (props) => {


  const [restauranteSeleccionado, setRestauranteSeleccionado] = useState(null);
  const [platoSeleccionado, setPlatoSeleccionado] = useState(null);
  const { restaurantes } = useSelector(state => state.restaurantes);
  const [platos, setPlatos] = useState(null);
  const [precio, setPrecio] = useState(0);
  const { startgetRestaurantesPlato } = useRestaurantesStore();

  console.log(platoSeleccionado, precio)
  useEffect(() => {

    startgetRestaurantesPlato();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRestauranteChange = (event) => {

    const restauranteId = parseInt(event.target.value);


    const restauranteSeleccionado = restaurantes.find(restaurantePlato => restaurantePlato.idRestaurante === restauranteId);

    if (restauranteSeleccionado) {
      setRestauranteSeleccionado(restauranteSeleccionado);

      // Si el restaurante seleccionado tiene platos, actualiza el estado con esos platos
      if (restauranteSeleccionado.platos) {
        setPlatos(restauranteSeleccionado.platos);

      } else {
        setPlatos([]);
      }
    }
  };


  const handlePlatoChange = (event) => {



    const platoId = parseInt(event.target.value);

    const platoSeleccionado = platos.find(plato => plato.idPlato === platoId);

    if (platoSeleccionado) {
      setPlatoSeleccionado(platoSeleccionado);



      // // Si el restaurante seleccionado tiene platos, actualiza el estado con esos platos

      setPrecio(platoSeleccionado.precio);


    }
  };

  return (
    <div>

      <div className='celda-modulo'>


        <div className='form-modulo-contenedor'>

          <div className='celda-form-modulo' >
            <div className='celda-form-modulo-h2-2'>
              <h2>Nombre Restaurante</h2>
            </div>
            <div className='div-select-50'>
              <select id='restaurante' name={props.nameR} onChange={handleRestauranteChange}>
                <option value="">Selecciona un restaurante</option>
                {restaurantes.map(restaurante => (
                  <option key={restaurante.idRestaurante} value={restaurante.idRestaurante}>
                    {restaurante.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {restauranteSeleccionado && (

        <div className='celda-modulo'>


          <div className='form-modulo-contenedor'>

            <div className='celda-form-modulo' >
              <div className='celda-form-modulo-h2-2'>
                <h2>Nombre Restaurante</h2>
              </div>
              <div className='div-select-50'>
                <select id='plato' name={props.nameP} value={props.valueP} onChange={handlePlatoChange}>
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
        </div>
      )}
      {/* {
        platoSeleccionado && (<div className='celda-modulo'>
          <form className='form-modulo'>

            <div className='form-modulo-contenedor'>

              <div className='celda-form-modulo'>
                <div className='celda-form-modulo-h2-2'>
                  <h2>Precio</h2>
                </div>
                <div className='div-input-50'>
                  <input className='input-p'
                    type='number'>{precio}</input>

                </div>

              </div>





            </div>




          </form>
        </div>
        )
      } */}


















      <div>


      </div>
    </div>
  );
};
