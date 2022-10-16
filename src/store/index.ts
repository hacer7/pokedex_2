import { pokeReducers } from './pokeApi/pokedex';
import { pokeApi } from './pokeApi/poke.api';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        [pokeApi.reducerPath]: pokeApi.reducer,
        pokedex: pokeReducers
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }).concat(pokeApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>