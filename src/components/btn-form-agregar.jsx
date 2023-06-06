import React from 'react';
import '../styles/button.css'
import AddIcon from '@mui/icons-material/Add';

export const ComboBotonAgregar = ({onClickA}) => {
  return (
    <div className='comboButton'>
        <div className='comboButton-conte'>
        <button className="button-cancelar">Cancelar</button>
      <button className="button-agregar" onClick={onClickA}><AddIcon/>Agregar</button>

        </div>
      
    </div>
  );
}

