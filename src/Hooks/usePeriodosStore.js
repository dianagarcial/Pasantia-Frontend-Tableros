import { useDispatch } from "react-redux"
import { setAllPeriodos } from "../store";
import { aplicativoApi } from "../api";


export const usePeriodosStore = () => {

  const dispatch = useDispatch()
  
  const startgetPeriodo = async() => {
    try {
        const { data } = await aplicativoApi.get('/periodo/getPeriodos');
   
        dispatch(setAllPeriodos(data));
    } catch (error) {
       
        console.error(error);
    }
  }  

  
  
  return {
    startgetPeriodo
  }
}
