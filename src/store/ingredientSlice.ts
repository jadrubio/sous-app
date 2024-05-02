import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IngredientState {
  ingredients: string[];
}

const initialState: IngredientState = {
  ingredients: [],
};

export const ingredientSlice = createSlice({
  name: "ingredientEditor",
  initialState,
  reducers: {
    updateIngredients: (state, action: PayloadAction<string[]>) => {
      state.ingredients = action.payload;
    },
  },
});

export const { updateIngredients } = ingredientSlice.actions;

export default ingredientSlice.reducer;
