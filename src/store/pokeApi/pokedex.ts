import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PokeState{
    searchValue: string
    type: string
    favourite: string[]
}
const LSK = 'LSK'

export const initialState: PokeState = {
    searchValue: '',
    type: 'Type Filter',
    favourite: JSON.parse(localStorage.getItem(LSK) || '[]')
}



const pokeSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers:{
        saveSearchValue(state, action: PayloadAction<string>){
            state.searchValue = action.payload
        },
        saveTypeValue(state, action: PayloadAction<string>){
            state.type = action.payload
        },
        addFavourite(state, action: PayloadAction<string>){
            state.favourite.push(action.payload)
            localStorage.setItem(LSK, JSON.stringify(state.favourite))
        },
        removeFavourite(state, action: PayloadAction<string>){
            state.favourite = state.favourite.filter(e => e !== action.payload)
            localStorage.setItem(LSK, JSON.stringify(state.favourite))
        }
    }
})

export const pokeActions = pokeSlice.actions
export const pokeReducers = pokeSlice.reducer 

