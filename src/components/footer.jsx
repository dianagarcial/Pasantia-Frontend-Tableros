import React from 'react'
import '../styles/footer.css'
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contenido-general'>
                <div className='deco'>
                    <img className='img' src='/images/foot-deco.png' id='deco-foot' alt='deco-foot' />
                </div>
                <div className='contenido'>
                    <div className='texto'>
                        <h1 id='h1-foot'>Unidad de Servicios a la Comunidad</h1>
                        <h2 id='h2-foot'>Gestion de la información procedimental</h2>
                    </div>

                    <div className='logo'>
                        <img className='img' src='/images/logoUao.png' alt='logo' id='log-uao-foot' />
                    </div>

                </div>
            </div>
        </footer>


    )
}