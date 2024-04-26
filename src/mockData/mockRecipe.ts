import { IngredientType } from "../Ingredients/IngredientTypes";

type RecipeType = {
  ingredients: IngredientType[];
  directions: any;
  notes: any;
};

export const mockRecipe: RecipeType = {
  ingredients: [
    {
      quantity: 191,
      unit: "grams",
      item: "Unfed Sourdough Starter",
    },
    {
      quantity: 377,
      unit: "grams",
      item: "Hot Water (~130°F)",
    },
    {
      quantity: 28,
      unit: "grams",
      item: "Olive Oil (or other neutral oil",
    },
    {
      quantity: 11,
      unit: "grams",
      item: "Salt",
    },
    {
      quantity: 765,
      unit: "grams",
      item: "All-Purpose Flour",
    },
  ],
  directions: [
    { step: "Combine all ingredients in a bowl and mix well." },
    { step: "Let set for 20 minutes if using right away." },
  ],
  notes: [
    {
      note: "Add flavoring to the batter by mixing in:",
      nested: ["Minced garlic", "Red pepper flakes"],
    },
  ],
};
