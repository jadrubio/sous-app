import Ingredient from "./Ingredient.tsx";
import { IngredientListType, IngredientType } from "./IngredientTypes.ts";
import "./styles.css";

const IngredientList = ({ ingredients }: IngredientListType) => {
  return (
    <>
      <h3>Ingredients</h3>
      <ul className="list-group">
        {ingredients.map((item: IngredientType) => (
          <Ingredient
            key={item.quantity + item.unit + item.item}
            ingredient={item}
          />
        ))}
      </ul>
    </>
  );
};
export default IngredientList;
