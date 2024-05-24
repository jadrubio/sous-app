import { RootState } from "./store";

export const selectIngredients = (state: RootState) =>
  state.ingredientEditor.ingredients;

export const selectDirections = (state: RootState) =>
  state.directionEditor.directions;
