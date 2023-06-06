import { useNavigate } from "react-router-dom";
import { aplicativoApi } from "../api";
import * as Swal from 'sweetalert2';


export const useFacturasStore = () => {
  
 // const dispatch = useDispatch()
  const navigate = useNavigate();

  const startCreatingFactura = async ({ idProveedor,idPeriodo,idServicio,fechaFacturacion,numeroFactura,cobro }) => {

    try {
      const fechaActual = new Date();
      const anio = fechaActual.getFullYear();
      const mes = fechaActual.getMonth() + 1;
      const dia = fechaActual.getDate();

      const fechaEs = `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia
        }`;


        cobro=parseInt(cobro)
    //   idPeriodo=parseInt(idPeriodo)
    
      
      if (idProveedor && idPeriodo && idServicio && fechaFacturacion && numeroFactura && cobro) {
        await aplicativoApi.post('/factura/crearRegistroCompetetividadValorGenerado', { idProveedor:idProveedor,idPeriodo:idPeriodo,idServicio:idServicio,fechaFacturacion: fechaFacturacion,numeroFactura:numeroFactura,fechaCargue:fechaEs,cobro:cobro })
        //console.log(data);
        Swal.fire('Creacion exitosa','Se ha creado correctamente el registro','success');
        navigate(`/`)
      
      
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
    startCreatingFactura
  }
}