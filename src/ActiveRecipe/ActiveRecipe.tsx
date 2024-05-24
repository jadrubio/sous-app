import IngredientList from "./Ingredients/IngredientList.tsx";
import SectionList from "./Section/SectionList.tsx";
import { mockRecipe } from "../mockData/mockRecipe.ts";
import "./styles.css";

const ActiveRecipe = () => {
  return (
    <div className="container">
      <div className="box ingredients">
        <IngredientList ingredients={mockRecipe.ingredients} />
      </div>
      <div className="box directions">
        <SectionList
          heading="Directions"
          displayItems={mockRecipe.directions}
          ordered
          clickable
        />
      </div>
      <div className="box notes">
        <SectionList heading="Notes" displayItems={mockRecipe.notes} />
      </div>
    </div>
  );
};

export default ActiveRecipe;
