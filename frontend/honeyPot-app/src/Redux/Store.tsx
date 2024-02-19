import {configureStore} from "@reduxjs/toolkit"
import { CounterReducer } from "./SLices/CounterSlice";




// create my store

export const honeyPotStore = configureStore({
    reducer:{count:CounterReducer}
})



export type RootState = ReturnType<typeof honeyPotStore.getState>;
export type dispatch = ReturnType<typeof honeyPotStore.dispatch>;