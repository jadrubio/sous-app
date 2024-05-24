import { useEffect } from "react";
import EditRecipe from "./EditRecipe";

function App() {
  useEffect(() => {
    console.log("runnaway?");
  });
  return (
    <>
      <h1 className="read-the-docs">Sous App</h1>
      <p className="read-the-docs">Your helpful recipe tracking app</p>
      <EditRecipe />
    </>
  );
}

export default App;
