import Ingredient from "./Ingredient.tsx";
import { IngredientListType, IngredientType } from "./IngredientTypes.ts";
import "./styles.css";

const IngredientList = ({ ingredients }: IngredientListType) => {
  const numIngredients: number = ingredients.length;

  const firstColumnIngredients: IngredientType[] = ingredients.slice(0, Math.ceil(numIngredients / 2));
  const secondColumnIngredients: IngredientType[] = ingredients.slice(Math.ceil(numIngredients / 2));

  return (
    <section>
      <h3>Ingredients</h3>
      <div className="ingredient-list-group">
        <div className="ingredient-row">
          <article className="ingredient-column">
            {firstColumnIngredients.map((ingredient: IngredientType, index: number) => (
              <div key={index}>
                <Ingredient ingredient={ingredient} />
              </div>
            ))}
          </article>
          <article className="ingredient-column">
            {secondColumnIngredients.map((ingredient, index) => (
              <div key={index}>
                <Ingredient ingredient={ingredient} />
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default IngredientList;
