import { selectIngredients, selectDirections, selectNotes } from "../selectors";
import { RootState } from "../store";

describe("Selectors", () => {
  const mockState: RootState = {
    ingredientEditor: {
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    },
    directionEditor: {
      directions: ["Direction 1", "Direction 2", "Direction 3"],
    },
    noteEditor: {
      notes: ["Note 1", "Note 2", "Note 3"],
    },
    // Include other slices of state if any, with their respective initial states
  };

  describe("selectIngredients", () => {
    it("should return the ingredients from the state", () => {
      const selectedIngredients = selectIngredients(mockState);
      expect(selectedIngredients).toEqual([
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
      ]);
    });
  });

  describe("selectNotes", () => {
    it("should return the directions from the state", () => {
      const selectedDirections = selectDirections(mockState);
      expect(selectedDirections).toEqual([
        "Direction 1",
        "Direction 2",
        "Direction 3",
      ]);
    });
  });

  describe("selectNotes", () => {
    it("should return the notes from the state", () => {
      const selectedNotes = selectNotes(mockState);
      expect(selectedNotes).toEqual(["Note 1", "Note 2", "Note 3"]);
    });
  });
});
