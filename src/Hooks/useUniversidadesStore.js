import { useDispatch } from "react-redux"
import { setAllUniversidadesComp, setAllUniversidadesCompRes } from "../store";
import { aplicativoApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useUniversidadesStore = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  
  const startgetUniversidades = async() => {
    try {
        const { data } = await aplicativoApi.get('/universidadCompetencia/getUniversidadesCompetencia');
        // console.log(data)
        dispatch(setAllUniversidadesComp(data));
    } catch (error) {
       
        console.error(error);
    }
  }  

  const startgetUniversidadesRes = async() => {
    try {
        const { data } = await aplicativoApi.get('/universidadCompetencia/ObtenerUniversidadesConRestaurantes');
        // console.log(data)
        dispatch(setAllUniversidadesCompRes(data));
        
    } catch (error) {
       
        console.error(error);
    }
  }  

  const startCreatingNewUniversidad = async ({ nombreUniversidadx }) => {

    try {
   
      
        const { data } = await aplicativoApi.post(`/universidadCompetencia/crear/${nombreUniversidadx}`)
        console.log(data);
        Swal.fire('Creacion exitosa','Se ha creado correctamente el registro','success');
        navigate(`/Edicion-Parametros/Servicios-alimenticios/`)
      
      
      
        
       


    } catch (error) {
      console.error(error);
    }

  }

  
  
  return {
    startgetUniversidades,
    startCreatingNewUniversidad,
    startgetUniversidadesRes
  }
}
