import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import { aplicativoApi } from "../api";
import Swal from "sweetalert2";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ usuario, contrasena }) => {

        dispatch( onChecking() );

        try {

            const { data } = await aplicativoApi.post('/User/login',{ usuario:usuario, contrasena:contrasena });
            console.log(data)
            localStorage.setItem('login', data);
            if(data){
                dispatch( onLogin({user: 'prueba'}))
            }else{

                dispatch( onLogout('Credenciales incorrectas') );
                Swal.fire({
                    icon: 'error',
                    
                    title: 'Credenciales incorrectas',
                    text: 'Por favor, verifique que la información diligenciada sea correcta',
                   
                  })

                setTimeout(() =>{
                    dispatch( clearErrorMessage() )
                }, 10);
            }
            
            // localStorage.setItem('token-init-date', new Date().getTime() );
            // dispatch( onLogin({ id: data.id, nombre: data.nombre, correo: data.correo, rol: data.rol, estado: data.estado, puntos: data.puntos  }) );

        } catch (error) {

            dispatch( onLogout('Credenciales incorrectas') );
            localStorage.setItem('login', false);

            setTimeout(() =>{
                dispatch( clearErrorMessage() )
            }, 10);

        }

    }

    const checkIsLogged = async() => {

        const isLogin = localStorage.getItem('login')
        
        if( !isLogin ) return dispatch( onLogout({user: 'prueba'}) );

        try {
            
            localStorage.setItem('login', true);
            dispatch( onLogin({user: 'prueba'}) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }

    }

    

    const startLogout = () => {

        localStorage.clear();
        //localStorage.setItem('login', false);
        dispatch( onLogout() );
        
    }

    return {

        status,
        user,
        errorMessage,
        checkIsLogged,
        startLogin,
        startLogout,

    }

}