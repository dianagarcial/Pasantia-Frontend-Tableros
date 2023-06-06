import { useDispatch } from "react-redux"
import { setAllAreas } from "../store";
import { aplicativoApi } from "../api";

export const useAreasStore = () => {

  const dispatch = useDispatch()
  
  const startgetAreas = async() => {
    try {
        const { data } = await aplicativoApi.get('/areas/areasConPreguntas');

        dispatch(setAllAreas(data));
    } catch (error) {
       console.error(error);
    }
  }  

 
 

  
  
  return {
    startgetAreas
  }
}
