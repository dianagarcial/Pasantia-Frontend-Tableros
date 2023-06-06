import { createSlice } from '@reduxjs/toolkit';
export const periodosSlice = createSlice({
      name: 'periodos',
      initialState:{
         periodos: [],
         errorMessage: null,
        
      },
      reducers:{
            setAllPeriodos: (state, { payload = [] }) =>{
              state.periodos = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllPeriodos } = periodosSlice.actions