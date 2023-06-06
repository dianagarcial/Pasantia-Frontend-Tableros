import React, { useEffect } from 'react'
import '../styles/modulo.css'

import { ComSelect } from './select';

import '../styles/celdaModulo.css'
import { useSelector } from 'react-redux';
import { useRestaurantesStore } from '../Hooks/useRestaurantesStore';



export const CeldaModuloSelect2Restaurante = (props) => {

    const { restaurantes } = useSelector(state => state.restaurantes);
    const { startgetRestaurantes } = useRestaurantesStore();



    const optionsRestaurant = restaurantes.map((p) => {
        return {
            value: p.idRestaurante,
            label: p.nombre,
        }
    });
    useEffect(() => {
        startgetRestaurantes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (

        <div className='celda-modulo'>
            <form className='form-modulo'>

                <div className='form-modulo-contenedor'>

                    <div className='celda-form-modulo' >
                        <div className='celda-form-modulo-h2-2'>
                            <h2>{props.titulo}</h2>
                        </div>
                        <div className='div-select-50'>
                            <select
                                type={props.type}

                                id={props.id}
                                placeholder={props.placeholder}
                                name={props.name}
                                value={props.value}
                                onChange={props.onChange}>
                                <option value='seleccionar'>Selecciona una opción</option>
                                {optionsRestaurant.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>





                </div>




            </form>
        </div>


    )
}