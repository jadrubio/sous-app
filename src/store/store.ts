import { configureStore } from "@reduxjs/toolkit";
import ingredientSliceReducer from "./ingredientSlice.ts";

export default configureStore({
  reducer: {
    ingredientEditor: ingredientSliceReducer,
  },
});
