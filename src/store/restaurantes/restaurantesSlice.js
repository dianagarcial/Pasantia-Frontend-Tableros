import { createSlice } from '@reduxjs/toolkit';
export const restaurantesSlice = createSlice({
      name: 'restaurantes',
      initialState:{
         restaurantes: [],
         restaurantePlato:[],
         errorMessage: null,        
      },
      reducers:{
            setAllRestaurantes: (state, { payload = [] }) =>{
              state.restaurantes = payload;
              state.errorMessage = null;
            },
            setAllRestaurantesPlato: (state, { payload = [] }) =>{
              state.restaurantePlato = payload;
              state.errorMessage = null;
            }
            
       }
})

export const { setAllRestaurantes, setAllRestaurantesPlato } = restaurantesSlice.actions