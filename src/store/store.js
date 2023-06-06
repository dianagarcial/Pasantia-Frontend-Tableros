import { configureStore } from "@reduxjs/toolkit";
import { periodosSlice } from "./periodos/periodosSlice"
import { restaurantesSlice } from "./restaurantes/restaurantesSlice";
import { platosSlice } from "./platos/platosSlice";
import { platosCompetenciaSlice } from "./platosCompetencia/platosSlice";
import { areasSlice } from "./areas/areasSlice";
import { calificacionSlice } from "./calificacion/calificacionesSlice";
import { residuosSlice } from "./residuos/residuosSlice";
import { proveedoresSlice } from "./proveedores/proveedoresSlice";
import { serviciosSlice } from "./servicios/serviciosSlice";
import { authSlice } from "./auth/authSlice";
import { restaurantesCompSlice } from "./restaurantesCompetencia/restaurantesCompSlice";
import { universidadesCompSlice } from "./universidadesComp/universidadesCompSlice";


export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        periodos: periodosSlice.reducer,
        restaurantes:restaurantesSlice.reducer,
        platos:platosSlice.reducer,
        platosCompetencia: platosCompetenciaSlice.reducer,
        areas: areasSlice.reducer,
        calificaciones: calificacionSlice.reducer,
        residuos: residuosSlice.reducer,
        proveedores: proveedoresSlice.reducer,
        servicios: serviciosSlice.reducer,
        restaurantesComp: restaurantesCompSlice.reducer,
        universidadesComp: universidadesCompSlice.reducer
        
    },
})