import { aplicativoApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const usePlatosStore = () => {

  
  const navigate = useNavigate();

  const startCreatingNewPlato = async ({ idRestaurante, idPeriodo, nombrex, precio }) => {

    try {
      const fechaActual = new Date();
      const anio = fechaActual.getFullYear();
      const mes = fechaActual.getMonth() + 1;
      const dia = fechaActual.getDate();

      const fechaEs = `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia
        }`;
      

      idRestaurante=parseInt(idRestaurante)
      idPeriodo=parseInt(idPeriodo)
    
                 
      await aplicativoApi.post('platos/crear', { idRestaurante:idRestaurante, idPeriodo:idPeriodo, nombre:nombrex, precio:precio, fechaCreacion:fechaEs })
      Swal.fire('Creacion exitosa','Se ha creado correctamente el plato','success');
      navigate(`/Servicios-alimenticios/`)

        // console.log(data);
    
    } catch (error) {
      console.error(error);
    }

  }

  

    const startEditarplato=async ({ platoSeleccionado, precio, idPeriodo }) => {

      try {

      
       console.log(platoSeleccionado, precio, idPeriodo)
                   
        await aplicativoApi.put(`/platos/EditarPrecio/${platoSeleccionado}/${idPeriodo}/${precio}`)
        Swal.fire('Creacion exitosa','Se ha creado correctamente el plato','success');
        navigate(`/Edicion-Parametros/Servicios-alimenticios/`)
  
          // console.log(data);
      
      } catch (error) {
        console.error(error);
      }
  
    }


  return {
    startCreatingNewPlato,
    startEditarplato
  }
}
