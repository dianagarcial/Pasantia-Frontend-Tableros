import { useEffect, useState } from 'react';
export const useForm = ( initialForm = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    useEffect(() => {
        setFormState( initialForm );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const onInputChange = ({ target }) => {
   
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const [existe, setExiste] = useState(false);
    const [indexExistente, setIndexExistente] = useState(-1);
    
    const onSelectChage = ({ target }) => {
        const respuesta = formState.respuestas;
        const { name, value, obs } = target;
        
        respuesta.map((r,index) => {
          
           if (r.idPregunta === name) {
                setExiste(true);
            
                setIndexExistente(index);
                return true;
           }else{
                setExiste(false);
                return false;
           }
        })
        
        if(!existe) {
            respuesta.push(
                {
                    idPregunta: name,
                    calificacion: value,
                    observacion: obs,
                }
            )
            
        } else {
            respuesta[indexExistente] = {
                idPregunta: name,
                calificacion: value
            }
        }
        setFormState({
            ...formState,
            respuestas: respuesta
        });
    }


    const onResetForm = () => {
        setFormState( initialForm );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onSelectChage,
        onResetForm,
    }
}