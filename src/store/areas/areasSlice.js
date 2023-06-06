import { createSlice } from '@reduxjs/toolkit';

export const areasSlice = createSlice({
      name: 'areas',
      initialState:{
         areas: [],
         area1:[],
         area2:[],
         area3:[],
         errorMessage: 'Cargando',
        
      },
      
      reducers:{
            setAllAreas: (state, { payload = [] }) =>{
              state.areas = payload;
              state.errorMessage = null;
            },
            setArea1: (state, { payload = [] }) =>{
              state.area1 = payload;
              state.errorMessage = null;
            },
            setArea2: (state, { payload = [] }) =>{
              state.area2 = payload;
              state.errorMessage = null;
            },
            setArea3: (state, { payload = [] }) =>{
              state.area3 = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllAreas, setArea1, setArea2, setArea3 } = areasSlice.actions