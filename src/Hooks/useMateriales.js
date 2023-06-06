import { useNavigate } from "react-router-dom";
import { aplicativoApi } from "../api";
import Swal from "sweetalert2";


export const useMaterialesStore = () => {
  const navigate = useNavigate();


  
  const startCreatingMaterial = async({ nombre, idResiduox}) =>{
    try {
      
     
        const { data } = await aplicativoApi.post('/material/crearMaterial', {idMaterial:idResiduox, nombre:nombre} )
        console.log(data);
        Swal.fire('Creacion exitosa','Se ha creado correctamente el registro','success');
        navigate(`/Edicion-Parametros/`)

      

    } catch (error) {
      console.error(error);
    }

  }

 
  return {
    startCreatingMaterial
  }
}
