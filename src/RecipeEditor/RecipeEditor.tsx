import React from "react";
import Heading from "../UI/Heading.tsx";
import IngredientEditor from "./IngredientEditor.tsx";
import DirectionEditor from "./DirectionEditor.tsx";

const RecipeForm: React.FC = () => {
  return (
    <div>
      <Heading name="Recipe Ingredients" />
      <IngredientEditor />
      <DirectionEditor />
    </div>
  );
};

export default RecipeForm;
