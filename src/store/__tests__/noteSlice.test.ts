import noteReducer, { updateNotes } from "../noteSlice";

describe("noteSlice", () => {
  const initialState = {
    notes: [],
  };

  it("should return the initial state", () => {
    expect(noteReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle updateNotes", () => {
    const newNotes = ["Note 1", "Note 2", "Note 3"];
    const action = updateNotes(newNotes);
    const expectedState = {
      notes: newNotes,
    };

    expect(noteReducer(initialState, action)).toEqual(expectedState);
  });

  it("should replace the existing notes when updateNotes is called", () => {
    const initialStateWithNotes = {
      notes: ["Old note 1", "Old note 2"],
    };
    const newNotes = ["New note 1", "New note 2"];
    const action = updateNotes(newNotes);
    const expectedState = {
      notes: newNotes,
    };

    expect(noteReducer(initialStateWithNotes, action)).toEqual(expectedState);
  });

  it("should handle empty array when updateNotes is called", () => {
    const newNotes: string[] = [];
    const action = updateNotes(newNotes);
    const expectedState = {
      notes: newNotes,
    };

    expect(noteReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle updateNotes with a large number of notes", () => {
    const newNotes = Array.from({ length: 1000 }, (_, i) => `Note ${i + 1}`);
    const action = updateNotes(newNotes);
    const expectedState = {
      notes: newNotes,
    };

    expect(noteReducer(initialState, action)).toEqual(expectedState);
  });
});
