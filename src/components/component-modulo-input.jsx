import React from 'react'
import '../styles/componentSelect.css'



export const ComponetModuloInput = (props) => {
    
    return (
        <div className='div-component-select'>
            <div className='component-select'>
                <form className='form-component-select'>
                    <div className='form-component-select-h3'>
                        <h3>{props.titulo}</h3>
                    </div>
                 
                    <div className='div-input-50'>   
                                        
                    <input className='input-pA'
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        accept={props.accept}
                        name={props.name}
                        required={props.required}/>
                       </div>
             


                </form>
            </div>
        </div>


    )
}