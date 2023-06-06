import React from 'react'
import '../styles/modulo.css'

import { ComSelect } from './select';

import '../styles/celdaModulo.css'



export const CeldaModuloSelect2 = ({titulo, options}) => {

    return (

        <div className='celda-modulo'>
            <form className='form-modulo'>

                <div className='form-modulo-contenedor'>
                    
                        <div className='celda-form-modulo' >
                        <div className='celda-form-modulo-h2-2'>
                        <h2>{titulo}</h2>
                        </div>
                        <div className='div-select-50'>                      
                        <ComSelect options={options}/>
                       </div>

                    </div>


                  


                </div>




            </form>
        </div>


    )
}