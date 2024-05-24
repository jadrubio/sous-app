import { configureStore } from "@reduxjs/toolkit";
import ingredientSliceReducer from "./ingredientSlice.ts";
import directionSliceReducer from "./directionSlice.ts";
import noteSliceReducer from "./noteSlice.ts";

const store = configureStore({
  reducer: {
    ingredientEditor: ingredientSliceReducer,
    directionEditor: directionSliceReducer,
    noteEditor: noteSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
