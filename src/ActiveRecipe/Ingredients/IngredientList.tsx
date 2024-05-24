import React from "react";
import { IngredientListType } from "./IngredientTypes.ts";
import Ingredient from "./Ingredient.tsx";
import "./styles.css";

const IngredientList: React.FC<IngredientListType> = ({ ingredients }) => {
  const numIngredients = ingredients.length;
  const isSingleColumn = window.innerWidth < 992 || numIngredients <= 7;

  return (
    <section aria-labelledby="ingredient-list-heading">
      <h2 id="ingredient-list-heading">Ingredients</h2>
      <div
        className={`ingredient-list-group ${isSingleColumn ? "single-column" : ""}`}
      >
        <div className="ingredient-row">
          <ul
            className={`ingredient-column ${isSingleColumn ? "single-column" : ""}`}
          >
            {ingredients.map((ingredient) => (
              <Ingredient
                key={`${ingredient.unit}${ingredient.item}`}
                ingredient={ingredient}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IngredientList;
