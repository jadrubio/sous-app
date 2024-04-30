import Ingredient from "./Ingredient.tsx";
import { IngredientListType, IngredientType } from "./IngredientTypes.ts";
import "./styles.css";

const IngredientList = ({ ingredients }: IngredientListType) => {
  const numIngredients: number = ingredients.length;

  // Determine whether to display one or two columns
  const isSingleColumn = window.innerWidth < 992 || numIngredients <= 7;

  return (
    <section>
      <h3>Ingredients</h3>
      <div className={`ingredient-list-group ${isSingleColumn ? 'single-column' : ''}`}>
        <div className="ingredient-row">
          <article className={`ingredient-column ${isSingleColumn ? 'single-column' : ''}`}>
            {ingredients.map((ingredient: IngredientType, index: number) => (
                <Ingredient key={index} ingredient={ingredient} />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default IngredientList;
