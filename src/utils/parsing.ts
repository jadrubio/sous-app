import { IngredientType } from "../UI/Ingredients/IngredientTypes.ts";

export const parseStringToArray = (text: string): string[] => {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
  return lines;
};

export const parseIngredientArraytoObj = (
  line: string,
): IngredientType | null => {
  const parts = line.trim().split(/\s+/);

  if (parts.length < 2) {
    return null;
  }

  const quantityStr = parts[0];
  const unit = parts[1];
  const item = parts.slice(2).join(" ");

  const quantity = parseFloat(quantityStr);

  if (isNaN(quantity)) {
    return null;
  }

  return { quantity, unit, item };
};
