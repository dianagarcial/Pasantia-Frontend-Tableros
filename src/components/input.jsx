import React from 'react'
import '../styles/input.css'


export const ComInput = (props) => {


    return (

        <input className='input-p'
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            accept={props.accept}
            name={props.name}
            required={props.required}
        />






    )
}