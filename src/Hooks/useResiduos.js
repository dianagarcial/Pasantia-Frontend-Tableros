import { useDispatch } from "react-redux"
import { setAllResiduos} from "../store";
import { aplicativoApi } from "../api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useResiduosStore = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const startgetResiduos = async() => {
    try {
        const { data } = await aplicativoApi.get('/tiporesiduo/obtenerMaterialesPorTipoResiduo');
        console.log(data)
        dispatch(setAllResiduos(data));
    } catch (error) {
       console.error(error);
    }
  }  
  
  const startCreatingVentaResiduo = async(res) =>{
    try {
   
      
      console.log(res);

  
        const { data } = await aplicativoApi.post('/detalleRecoleccion/crearDetalleRecoleccion', res )
        console.log(data);
        console.log('listo')
        Swal.fire('Creacion exitosa','Se ha creado correctamente el registro','success');
        navigate(`/`)
      


    } catch (error) {
      console.error(error);
    }

  }

 
  return {
    startgetResiduos,
    startCreatingVentaResiduo
  }
}
