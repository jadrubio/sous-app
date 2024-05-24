import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NoteState {
  notes: string[];
}

const initialState: NoteState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "noteEditor",
  initialState,
  reducers: {
    updateNotes: (state, action: PayloadAction<string[]>) => {
      state.notes = action.payload;
    },
  },
});

export const { updateNotes } = noteSlice.actions;

export default noteSlice.reducer;
