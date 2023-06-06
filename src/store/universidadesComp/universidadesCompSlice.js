import { createSlice } from '@reduxjs/toolkit';
export const universidadesCompSlice = createSlice({
      name: 'universidadesComp',
      initialState:{
        universidadesComp: [],
        universidadesCompRes: [],
        errorMessage: null,
        
      },
      reducers:{
            setAllUniversidadesComp: (state, { payload = [] }) =>{
              state.universidadesComp = payload;
              state.errorMessage = null;
            },
            setAllUniversidadesCompRes: (state, { payload = [] }) =>{
              state.universidadesCompRes = payload;
              state.errorMessage = null;
            },
           
            
       }
})

export const { setAllUniversidadesComp, setAllUniversidadesCompRes} = universidadesCompSlice.actions