import "./styles.css";
import IngredientList from "../UI/Ingredients/IngredientList.tsx";
import { mockRecipe } from "../mockData/mockRecipe.ts";
import SectionList from "../UI/Section/SectionList.tsx";

const DisplayRecipe = () => {
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

export default DisplayRecipe;
