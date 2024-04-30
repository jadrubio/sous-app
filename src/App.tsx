import IngredientList from "./Ingredients/IngredientList.tsx";
import { mockRecipe } from "./mockData/mockRecipe.ts";
import Directionlist from "./Directions/DirectionsList.tsx";

function App() {
  return (
    <>
      <h1 className="read-the-docs">Sous App</h1>
      <p className="read-the-docs">Your helpful recipe tracking app</p>
      <IngredientList ingredients={mockRecipe.ingredients} />
      <Directionlist directions={mockRecipe.directions} />
    </>
  );
}

export default App;
