import React from 'react'
import '../styles/modulo.css'

import '../styles/celdaModulo.css'
import { ComInput } from './input';


export const CeldaModuloInput2 = (props) => {

    return (

        <div className='celda-modulo'>
            <form className='form-modulo'>

                <div className='form-modulo-contenedor'>

                    <div className='celda-form-modulo'>
                        <div className='celda-form-modulo-h2-2'>
                            <h2>{props.titulo}</h2>
                        </div>
                        <div className='div-input-50'>
                            <ComInput
                                type={props.type}
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={props.onChange}
                                accept={props.accept}
                                name={props.name}
                                required={props.required} />
                        </div>

                    </div>





                </div>




            </form>
        </div>


    )
}