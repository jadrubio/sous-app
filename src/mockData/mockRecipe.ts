import { IngredientType } from "../UI/Ingredients/IngredientTypes";
import { SectionItemType } from "../UI/Section/SectionTypes.ts";

type RecipeType = {
  ingredients: IngredientType[];
  directions: SectionItemType[];
  notes: SectionItemType[];
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
      item: "Olive Oil (or other neutral oil)",
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
    { info: "Combine all ingredients in a bowl and mix well." },
    { info: "Let set for 20 minutes if using right away." },
  ],
  notes: [
    { info: "Add flavoring to the batter by mixing in:" },
    { info: "Minced garlic" },
    { info: "Red pepper flakes" },
  ],
};
