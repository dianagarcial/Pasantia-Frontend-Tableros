import { createSlice } from '@reduxjs/toolkit';
export const platosCompetenciaSlice = createSlice({
      name: 'platosCompetencia',
      initialState:{
         platosCompetencia: [],
         errorMessage: null,
        
      },
      reducers:{
            setAllPlatosCompetencia: (state, { payload = [] }) =>{
              state.platosCompetencia = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllPlatosCompetencia } = platosCompetenciaSlice.actions