import React, { useEffect } from 'react'
import '../styles/modulo.css'
import '../styles/celdaModulo.css'
import { useSelector } from 'react-redux';
import { useProvedoresStore } from '../Hooks/useProveedoresStore';



export const CeldaModuloSelect2Proveedor = (props) => {
    const { proveedores } = useSelector(state => state.proveedores);
    const { startgetProveedores } = useProvedoresStore();



    const options = proveedores.map((p) => {
        return {
            value: p.idProveedor,
            label: p.nombre,
        }
    });


    useEffect(() => {
        startgetProveedores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (

        <div className='celda-modulo'>
            <form className='form-modulo'>

                <div className='form-modulo-contenedor'>

                    <div className='celda-form-modulo' >
                        <div className='celda-form-modulo-h2-2'>
                            <h2>{props.titulo}</h2>
                        </div>
                        <div className='div-select-50'>

                            <select
                                type={props.type}

                                id={props.id}
                                placeholder={props.placeholder}
                                name={props.name}
                                value={props.value}
                                onChange={props.onChange}>
                                <option value='seleccionar'>Selecciona una opción</option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>





                </div>




            </form>
        </div>


    )
}