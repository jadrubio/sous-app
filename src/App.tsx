import IngredientList from "./Ingredients/IngredientList.tsx";
import { mockRecipe } from "./mockData/mockRecipe.ts";

function App() {
  return (
    <>
      <h1 className="read-the-docs">Sous App</h1>
      <p className="read-the-docs">Your helpful recipe tracking app</p>
      <IngredientList ingredients={mockRecipe.ingredients} />
    </>
  );
}

export default App;
