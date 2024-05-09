export type IngredientType = {
  quantity: number;
  unit: string;
  item: string;
};

export type IngredientProp = {
  ingredient: IngredientType;
};

export type IngredientListType = {
  ingredients: IngredientType[];
};
