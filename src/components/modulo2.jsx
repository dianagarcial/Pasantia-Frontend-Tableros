import React from 'react'
import '../styles/modulo.css'

export const Modulo2 = ({ titulo, content }) => {

    return (
        <div className='modulo'>
            <div className='titulo-bloque' >
                <h2>{titulo}</h2>


            </div>

            <div className='cajon'>

                <div className='contenido'>
                    <div className='celda'>
                        <div>
                            {content}
                        </div>

                    </div>
                </div>


            </div>
        </div>


    )
}