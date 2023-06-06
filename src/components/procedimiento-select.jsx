import React from 'react'
import '../styles/procedimiento.css'


export const Procedimiento2 = ({ img, titulo }) => {


    return (

      
            <div className='cajon-proce-sac'>
                <div className='cajon-proce-img'>
                    <img src={img} alt='logo-pro' id='logoProc' />
                </div>
                <div className='cajon-proce-h2'>
                    <h2 className='ti-procedimiento' >{titulo}</h2>
                </div>
            </div>




    )
}