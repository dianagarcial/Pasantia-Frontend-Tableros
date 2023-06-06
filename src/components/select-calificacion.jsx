import React, { useEffect } from 'react'
import '../styles/select.css'
import { useCalificacionesStore } from '../Hooks/useCalificacionesStore';
import { useSelector } from 'react-redux';


export const ComSelectCalificacion = (props) => {

    const { calificaciones } = useSelector(state => state.calificaciones);
    const { startgetCalificaciones } = useCalificacionesStore();
    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const options = calificaciones.map((c) => {
        return {
            value: c.idCalificacion,
            label: capitalizeWord(c.nombre),
        }
    });
    useEffect(() => {
        startgetCalificaciones();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (

        <select
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            required
        >
            <option value='0'>Selecciona la calificación*</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>




    )
}