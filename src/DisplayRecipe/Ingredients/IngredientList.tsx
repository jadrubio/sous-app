import Ingredient from "./Ingredient.tsx";
import { IngredientListType, IngredientType } from "./IngredientTypes.ts";
import "./styles.css";
import React from "react";

const IngredientList: React.FC<IngredientListType> = ({ ingredients }) => {
  const numIngredients: number = ingredients.length;

  // Determine whether to display one or two columns
  const isSingleColumn = window.innerWidth < 992 || numIngredients <= 7;

  return (
    <section>
      <div
        className={`ingredient-list-group ${isSingleColumn ? "single-column" : ""}`}
      >
        <div className="ingredient-row">
          <ul
            className={`ingredient-column ${isSingleColumn ? "single-column" : ""}`}
          >
            {ingredients.map((ingredient: IngredientType, index: number) => (
              <Ingredient key={index} ingredient={ingredient} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IngredientList;
