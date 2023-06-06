import { useDispatch } from "react-redux"
import { setAllRestaurantes, setAllRestaurantesPlato } from "../store";
import { aplicativoApi } from "../api";


export const useRestaurantesStore = () => {

  const dispatch = useDispatch()

  const startgetRestaurantes = async () => {
    try {
      const { data } = await aplicativoApi.get('restaurante/getRestaurantes');
      // console.log(data)
      dispatch(setAllRestaurantes(data));
    } catch (error) {
      console.error(error);
    }
  }

  const startgetRestaurantesPlato = async () => {
    try {
      const { data } = await aplicativoApi.get('restaurante/restaurantesConPlatos');
      console.log(data)
      dispatch(setAllRestaurantesPlato(data));
    } catch (error) {
      console.error(error);
    }
  }



  return {
    startgetRestaurantes,
    startgetRestaurantesPlato
  }

  
}
