import Swal from "sweetalert2";
import { aplicativoApi } from "../api";
import { useNavigate } from "react-router-dom";


export const usePlatosCompetenciaStore = () => {
  const navigate = useNavigate();

  const startCreatingNewPlatoCompetencia = async ({ idRestauranteCompetencia, nombrex, preciox, idPeriodox }) => {

    try {
      const fechaActual = new Date();
      const anio = fechaActual.getFullYear();
      const mes = fechaActual.getMonth() + 1;
      const dia = fechaActual.getDate();

      const fechaEs = `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia
        }`;


      console.log({idRestauranteCompetencia:idRestauranteCompetencia, nombre:nombrex,fechaCreacion:fechaEs, precio:preciox, idPeriodo:idPeriodox})
    
      await aplicativoApi.post('/platoCompetencia/crear', { idRestauranteCompetencia:idRestauranteCompetencia, nombre:nombrex,fechaCreacion:fechaEs, precio:preciox, idPeriodo:idPeriodox})
      Swal.fire('Creacion exitosa','Se ha creado correctamente el plato','success');
      navigate(`/Servicios-alimenticios/`)

    
    } catch (error) {
      console.error(error);
    }

  }

  
  
 

  





  return {
    startCreatingNewPlatoCompetencia,

  

  }
}
