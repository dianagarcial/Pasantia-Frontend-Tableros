// import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "../views/login"
import { Inicio } from "../views"
import { useAuthStore } from "../Hooks/useAuthStore"
import { Loading } from "../components/loading"
import { useEffect } from "react"

import { Cafeteria } from "../views/cafeteria"
import { AuditoriaCafeteria } from "../views/cafeteriaAudCafeteria"
import { InnovacionMenu } from "../views/cafeteriaInnovacionMenu"
import { Competitividad } from "../views/cafeteriaCompetitividad"

import { Paramentros } from "../views/parametros"
import { ParametrosCafeteria } from "../views/parametrosCaf"
import { EdicionPrecioUAO } from "../views/parametrosCafEdPrecioUAO"
import { NUniversidad } from "../views/parametrosCafNUniversidad"
import { NRestaurante } from "../views/parametrosCafNRestau"
import { NProveedor } from "../views/parametrosNProveedor"
import { NMaterial } from "../views/parametrosNMaterial"

import { GastosMovilidad } from "../views/movilidad"

import { AprovechamientoResiduos } from "../views/residuos"



export const AppRouter = () => {
    const { status, checkIsLogged } = useAuthStore()

    // const [login,setLogin] =useState(false)

    // useEffect(() => {
    //     setLogin(localStorage.getItem('login'));
    //     console.log(login)
    //   }, [])

    useEffect(() => {
        checkIsLogged();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (status === 'checking') {
        return (
            <Loading />
        )
    }

    return (

        <Routes>
        {

        (status === 'not-authenticated')
            ? (
                <>
                    
                    <Route path="/*" element={<Login />} />
                    
                </>
            )
            : (
                <>
                
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Servicios-alimenticios" element={<Cafeteria />} />
                    <Route path="/Edicion-Parametros" element={<Paramentros />} />
                    <Route path="/Servicios-alimenticios/Auditoria-cafeteria" element={<AuditoriaCafeteria />} />
                    <Route path="/Servicios-alimenticios/Innovacion-menu" element={<InnovacionMenu />} />
                    <Route path="/Edicion-Parametros/Servicios-alimenticios/Creacion-Universidad" element={<NUniversidad />} />
                    <Route path="/Edicion-Parametros/Servicios-alimenticios/Creacion-Restaurante" element={<NRestaurante />} />
                    <Route path="/Servicios-alimenticios/Competitividad" element={<Competitividad />} />
                    <Route path="/Edicion-Parametros/Servicios-alimenticios/Edicion-Precio-UAO" element={<EdicionPrecioUAO />} />
                    <Route path="/Gastos-Movilidad" element={<GastosMovilidad />} />
                    <Route path="/Edicion-Parametros/Nuevo-Proveedor-Movilidad" element={<NProveedor />} />
                    <Route path="/Aprovechamiento-Residuos" element={<AprovechamientoResiduos />} />
                    <Route path="/Edicion-Parametros/Nuevo-Material" element={<NMaterial />} />
                    <Route path="/Edicion-Parametros/Servicios-alimenticios" element={<ParametrosCafeteria />} />

                </>
            )}


    </Routes>
    )
}