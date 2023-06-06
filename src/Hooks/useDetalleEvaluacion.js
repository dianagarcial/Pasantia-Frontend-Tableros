import { aplicativoApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useDetalleEvaluacionStore = () => {

    const navigate = useNavigate();

    const startCreatingNewEvaluacion = async (allCalificaciones) => {
        console.log(allCalificaciones);
        try {
            if (allCalificaciones.some((c) => c.idCalificacion === '' || c.idCalificacion === '0')) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un problema al guardar la información',
                    text: 'Por favor, verifique que todos los campos marcados con (*) esten diligenciados',
                    
                })
            } else {
                const { data } = await aplicativoApi.post('detalleEvaluacion/crearDetalleEvaluacion', allCalificaciones);
                console.log(data);
                Swal.fire('Creacion exitosa','Se ha creado correctamente el registro','success');
                navigate(`/Servicios-alimenticios/`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        startCreatingNewEvaluacion,
    }
}
