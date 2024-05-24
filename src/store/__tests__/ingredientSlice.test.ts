import ingredientReducer, { updateIngredients } from "../ingredientSlice";

describe("ingredientSlice", () => {
  const initialState = {
    ingredients: [],
  };

  it("should return the initial state", () => {
    expect(ingredientReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  it("should handle updateIngredients", () => {
    const newIngredients = ["Flour", "Sugar", "Butter"];
    const action = updateIngredients(newIngredients);
    const expectedState = {
      ingredients: newIngredients,
    };

    expect(ingredientReducer(initialState, action)).toEqual(expectedState);
  });

  it("should replace the existing ingredients when updateIngredients is called", () => {
    const initialStateWithIngredients = {
      ingredients: ["Old ingredient 1", "Old ingredient 2"],
    };
    const newIngredients = ["New ingredient 1", "New ingredient 2"];
    const action = updateIngredients(newIngredients);
    const expectedState = {
      ingredients: newIngredients,
    };

    expect(ingredientReducer(initialStateWithIngredients, action)).toEqual(
      expectedState,
    );
  });

  it("should handle empty array when updateIngredients is called", () => {
    const newIngredients: string[] = [];
    const action = updateIngredients(newIngredients);
    const expectedState = {
      ingredients: newIngredients,
    };

    expect(ingredientReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle updateIngredients with a large number of ingredients", () => {
    const newIngredients = Array.from(
      { length: 1000 },
      (_, i) => `Ingredient ${i + 1}`,
    );
    const action = updateIngredients(newIngredients);
    const expectedState = {
      ingredients: newIngredients,
    };

    expect(ingredientReducer(initialState, action)).toEqual(expectedState);
  });
});
