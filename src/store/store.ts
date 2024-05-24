import { configureStore } from "@reduxjs/toolkit";
import ingredientSliceReducer from "./ingredientSlice.ts";
import directionSliceReducer from "./directionSlice.ts";

const store = configureStore({
  reducer: {
    ingredientEditor: ingredientSliceReducer,
    directionEditor: directionSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
