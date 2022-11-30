import {configureStore, createSlice} from "@reduxjs/toolkit";

const appelSlice = createSlice({
    name: "pokelove",
    initialState : [],
    reducers:{
        addFavoris: (state, pkm) => {
            state.push(pkm)
        },
        removeFavoris: (state, pkm) => {
            state = state.filter((t) => t.name !== pkm.name)
        }
    }
})
export const {addFavoris, removeFavoris}= appelSlice.actions

export const Store = configureStore({
    reducer: {
        pokelove: appelSlice.reducer,
    }
})

