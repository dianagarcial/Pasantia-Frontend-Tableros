import { aplicativoApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useRestaurantesCompStore = () => {

  const navigate = useNavigate();
  const startCreatingNewRestauranteComp = async ({ nombrex, idUniversidadx }) => {

    try {   
      
        const { data } = await aplicativoApi.post(`restauranteCompetencia/crear/${nombrex}/${idUniversidadx}`)
        console.log(data);
        Swal.fire('Creacion exitosa','Se ha creado correctamente el registro','success');
        navigate(`/Edicion-Parametros/Servicios-alimenticios/`)
      
    } catch (error) {
      console.error(error);
    }

  }

  


  return {
    
    startCreatingNewRestauranteComp
  }

  
}
