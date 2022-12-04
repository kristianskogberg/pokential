import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    selectedPokemon: "",
  },
  reducers: {
    selectPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { selectPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
