import { useDispatch } from "react-redux"
import { setAllCalificaciones } from "../store";
import { aplicativoApi } from "../api";


export const useCalificacionesStore = () => {

  const dispatch = useDispatch()
  
  const startgetCalificaciones = async() => {
    try {
        const { data } = await aplicativoApi.get('/calificacion/getCalificaciones');
 
        dispatch(setAllCalificaciones(data));
    } catch (error) {
       console.error(error);
    }
  }  

  
  
  return {
    startgetCalificaciones
  }
}
