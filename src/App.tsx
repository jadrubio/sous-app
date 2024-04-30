import IngredientList from "./Ingredients/IngredientList.tsx";
import DirectionList from "./Directions/DirectionList.tsx";
import { mockRecipe } from "./mockData/mockRecipe.ts";
import NoteList from "./Notes/NoteList.tsx";

function App() {
  return (
    <>
      <h1 className="read-the-docs">Sous App</h1>
      <p className="read-the-docs">Your helpful recipe tracking app</p>
      <IngredientList ingredients={mockRecipe.ingredients} />
      <DirectionList directions={mockRecipe.directions} />
      <NoteList notes={mockRecipe.notes} />
    </>
  );
}

export default App;
