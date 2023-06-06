import React, { useState } from 'react'
import '../styles/select.css'


export const ComSelect = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState('');


    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedOption(selectedOption);

    };


    return (

        <select value={selectedOption} onChange={handleChange}>
            <option value="">Seleccione*</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>




    )
}