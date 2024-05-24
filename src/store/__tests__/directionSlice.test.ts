import directionReducer, { updateDirections } from "../directionSlice";

describe("directionSlice", () => {
  const initialState = {
    directions: [],
  };

  it("should return the initial state", () => {
    expect(directionReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  it("should handle updateDirections", () => {
    const newDirections = ["Mix", "Rest", "Bake"];
    const action = updateDirections(newDirections);
    const expectedState = {
      directions: newDirections,
    };

    expect(directionReducer(initialState, action)).toEqual(expectedState);
  });

  it("should replace the existing directions when updateDirections is called", () => {
    const initialStateWithDirections = {
      directions: ["Old direction 1", "Old direction 2"],
    };
    const newDirections = ["New direction 1", "New direction 2"];
    const action = updateDirections(newDirections);
    const expectedState = {
      directions: newDirections,
    };

    expect(directionReducer(initialStateWithDirections, action)).toEqual(
      expectedState,
    );
  });

  it("should handle empty array when updateDirections is called", () => {
    const newDirections: string[] = [];
    const action = updateDirections(newDirections);
    const expectedState = {
      directions: newDirections,
    };

    expect(directionReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle updateDirections with a large number of directions", () => {
    const newDirections = Array.from(
      { length: 1000 },
      (_, i) => `Direction ${i + 1}`,
    );
    const action = updateDirections(newDirections);
    const expectedState = {
      directions: newDirections,
    };

    expect(directionReducer(initialState, action)).toEqual(expectedState);
  });
});
