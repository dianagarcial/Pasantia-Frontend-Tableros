import React from 'react';
import '../styles/button.css'


export const ComboBoton = (props) => {
  return (
    <div className='comboButton'>
      <div className='comboButton-conte'>
        <button className="button-cancelar" onClick={props.onClick}>Cancelar</button>
        <button className="button-enviar" type="submit">Enviar</button>

      </div>

    </div>
  );
}

