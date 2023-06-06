import React, { useEffect } from 'react'
import '../styles/componentSelect.css'
import { useSelector } from 'react-redux';
import { useRestaurantesStore } from '../Hooks/useRestaurantesStore';


export const ComponetSelectRestaurante = (props) => {
    const { restaurantes } = useSelector(state => state.restaurantes);
    const { startgetRestaurantes } = useRestaurantesStore();

    const options = restaurantes.map((p) => {
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
        <div className='div-component-select-r'>
            <div className='component-select'>
                <form className='form-component-select'>
                    <div className='form-component-select-h3'>
                        <h3>{props.titulo}</h3>
                    </div>
                    <div className='form-component-select-sel'>
                        <select
                            type={props.type}

                            id={props.id}
                            placeholder={props.placeholder}
                            name={props.name}
                            value={props.value}
                            onChange={props.onChange}>
                            <option value='seleccionar'>Selecciona una opción</option>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>


                </form>
            </div>
        </div>


    )
}