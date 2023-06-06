import { createSlice } from '@reduxjs/toolkit';
export const restaurantesCompSlice = createSlice({
      name: 'restaurantesComp',
      initialState:{
         restaurantesComp: [],
         restaurantePlatoComp:[],
         errorMessage: null,
        
      },
      reducers:{
            setAllRestaurantesComp: (state, { payload = [] }) =>{
              state.restaurantesComp = payload;
              state.errorMessage = null;
            },
            setAllRestaurantesPlatoComp: (state, { payload = [] }) =>{
              state.restaurantePlatoComp = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllRestaurantesComp, setAllRestaurantesPlatoComp } = restaurantesCompSlice.actions