import { createSlice } from '@reduxjs/toolkit';
export const platosSlice = createSlice({
      name: 'platos',
      initialState:{
         platos: [],
         errorMessage: null,
        
      },
      reducers:{
            setAllPlatos: (state, { payload = [] }) =>{
              state.platos = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllPlatos } = platosSlice.actions