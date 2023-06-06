import React, { useEffect } from 'react'
import '../styles/componentSelect.css'
import { useSelector } from 'react-redux';
import { useResiduosStore } from '../Hooks/useResiduos';


export const ComponetSelectTipoRes = (props) => {
    const { residuos } = useSelector(state => state.residuos);
    const { startgetResiduos } = useResiduosStore();
 
    const options=residuos.map((r) => {
        return {
            value: r.idTipoResiduo,
            label: r.nombre,
        }
    });
    useEffect(() => {
        startgetResiduos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='div-component-select'>
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