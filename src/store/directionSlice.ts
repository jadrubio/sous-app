import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DirectionState {
  directions: string[];
}

const initialState: DirectionState = {
  directions: [],
};

export const directionSlice = createSlice({
  name: "directionEditor",
  initialState,
  reducers: {
    updateDirections: (state, action: PayloadAction<string[]>) => {
      state.directions = action.payload;
    },
  },
});

export const { updateDirections } = directionSlice.actions;

export default directionSlice.reducer;
