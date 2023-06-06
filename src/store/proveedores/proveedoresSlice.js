import { createSlice } from '@reduxjs/toolkit';
export const proveedoresSlice = createSlice({
      name: 'proveedores',
      initialState:{
         proveedores: [],
         errorMessage: null,
        
      },
      reducers:{
            setAllProveedores: (state, { payload = [] }) =>{
              state.proveedores = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllProveedores } = proveedoresSlice.actions