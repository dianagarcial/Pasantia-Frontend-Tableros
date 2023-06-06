import { useDispatch } from "react-redux"
import { setAllServicios } from "../store";
import { aplicativoApi } from "../api";


export const useServiciosStore = () => {

  const dispatch = useDispatch()
  
  const startgetServicios = async() => {
    try {
        const { data } = await aplicativoApi.get('/servicio/obtenerServicios');
        // console.log(data)
        dispatch(setAllServicios(data));
    } catch (error) {
       
        console.error(error);
    }
  }  

  
  
  return {
    startgetServicios
  }
}
