import { createSlice } from '@reduxjs/toolkit';
export const serviciosSlice = createSlice({
      name: 'servicios',
      initialState:{
         servicios: [],
         errorMessage: null,
        
      },
      reducers:{
            setAllServicios: (state, { payload = [] }) =>{
              state.servicios = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllServicios } = serviciosSlice.actions