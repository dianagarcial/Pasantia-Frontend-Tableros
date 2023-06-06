import React from 'react'
import '../styles/navBar.css'
import { useAuthStore } from '../Hooks/useAuthStore';
export const NavBar = () => {
    const { startLogout } = useAuthStore();
    return (
        <div className='NavBar1'>
            <nav className='contenedor-nav'>
                <div className='Logo-nav'>
                    <a href="/"><img src="/images/Logo.png" alt="logo" id='logo-n' /></a>
                </div>

                <div className='btn-nav'>
                    <button className='btn-logout' onClick={startLogout}>
                        <img src="/images/cerrar.png" alt="salir" id='cerrar'></img>
                        <h2 id='salir-h2'>Salir</h2></button>

                </div>
            </nav>

        </div>


    )
}