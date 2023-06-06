import { createSlice } from '@reduxjs/toolkit';
export const calificacionSlice = createSlice({
      name: 'calificaciones',
      initialState:{
         calificaciones: [],
         errorMessage: null,
        
      },
      reducers:{
            setAllCalificaciones: (state, { payload = [] }) =>{
              state.calificaciones = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllCalificaciones } = calificacionSlice.actions