import { createSlice } from '@reduxjs/toolkit';
export const residuosSlice = createSlice({
      name: 'residuos',
      initialState:{
         residuos: [],
         errorMessage: null,
        
      },
      reducers:{
            setAllResiduos: (state, { payload = [] }) =>{
              state.residuos = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllResiduos } = residuosSlice.actions