import "./styles.css";
import IngredientList from "./Ingredients/IngredientList.tsx";
import { mockRecipe } from "../mockData/mockRecipe.ts";
import DirectionList from "./Directions/DirectionList.tsx";
import NoteList from "./Notes/NoteList.tsx";
import Heading from "../UI/Heading.tsx";

const DisplayRecipe = () => {
  return (
    <div className="container">
      <div className="box ingredients">
        <Heading name="Ingredients" />
        <IngredientList ingredients={mockRecipe.ingredients} />
      </div>
      <div className="box directions">
        <Heading name="Directions" />
        <DirectionList directions={mockRecipe.directions} />
      </div>
      <div className="box notes">
        <Heading name="Notes" />
        <NoteList notes={mockRecipe.notes} />
      </div>
    </div>
  );
};

export default DisplayRecipe;
