import { useDispatch } from "react-redux"
import { setAllProveedores } from "../store";
import { aplicativoApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useProvedoresStore = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  
  const startgetProveedores = async() => {
    try {
        const { data } = await aplicativoApi.get('/proveedor/obtenerProveedores');
        // console.log(data)
        dispatch(setAllProveedores(data));
    } catch (error) {
       
        console.error(error);
    }
  }  

  const startCreatingNewProveedor = async ({ nombrex }) => {

    try {
   
      
      console.log({nombre:nombrex});

      if (nombrex) {
        const { data } = await aplicativoApi.post('/proveedor/crearProveedor', { nombre:nombrex })
        console.log(data);
        Swal.fire('Creacion exitosa','Se ha creado correctamente el registro','success');
        navigate(`/Edicion-Parametros/`)
      
      
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un problema al guardar la información',
          text: 'Por favor, verifique que todos los campos marcados con (*) esten diligenciados',
          
        })
      }   


    } catch (error) {
      console.error(error);
    }

  }

  
  
  return {
    startgetProveedores,
    startCreatingNewProveedor
  }
}
