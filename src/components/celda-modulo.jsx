import React from 'react'
import '../styles/modulo.css'
import '../styles/celdaModulo.css'
import { ComInput } from './input';
import { ComSelectCalificacion } from './select-calificacion';
import { useForm } from '../Hooks';

export const CeldaModulo = (props) => {
    const { obj } = props;
    const campos = obj.campos;
    const respuesta = {
        idArea: obj.idArea,
        respuestas: []
    }
    
    const { idPregunta, observaciones, onInputChange, onSelectChage } = useForm(respuesta);
    
    return (

        <div className='celda-modulo'>
            <form className='form-modulo'>

                <div className='form-modulo-contenedor'>
                    {campos.map((campo, index) => (
                        <div className='celda-form-modulo' key={campo}>
                        <div className='celda-form-modulo-h2'>
                        <h2>{campo}</h2>
                        </div>
                        <div className='cajon-opt'>
                        <div className='div-select'>                        
                        <ComSelectCalificacion type="text" name={index+1} value={idPregunta} onChange={onSelectChage} />
                        {/* // value={idPeriodo} onChange={onInputChange} */}
                    
                        </div>
                        <div className='div-input'>  
                        <ComInput width='30' placeholder='Observaciones' type="text" name={observaciones} value={observaciones} onChange={onInputChange}/>
                        </div>
                        </div>
                    </div>


                    ))}


                </div>




            </form>
        </div>


    )
}