import React from 'react'
import '../styles/procedimiento.css'


export const Procedimiento = ({ onclick, img, titulo }) => {


    return (

        <button className='procedimiento' onClick={onclick}>
            <div className='cajon-proce'>
                <div className='cajon-proce-img'>
                    <img src={img} alt='logo-pro' id='logoProc' />
                </div>
                <div className='cajon-proce-h2'>
                    <h2 className='tit-procedimiento' >{titulo}</h2>
                </div>

            </div>


        </button>


    )
}