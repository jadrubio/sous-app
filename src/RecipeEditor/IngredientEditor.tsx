import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { updateIngredients } from "../store/ingredientSlice.ts";
import { parseStringToArray } from "../utils/parsing.ts";
import "./styles.css";

const IngredientEditor: React.FC = () => {
  const dispatch = useDispatch();
  const [ingredientsText, setIngredientsText] = useState("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setIngredientsText(newText);
    const parsedIngredients = parseStringToArray(newText);
    dispatch(updateIngredients(parsedIngredients));
  };

  return (
    <>
      <div className="ingredient-input-container">
        <label htmlFor="ingredients-textarea">
          Enter ingredients (one per line)
        </label>
        <textarea
          id="ingredients-textarea"
          value={ingredientsText}
          onChange={handleTextareaChange}
          placeholder="e.g.&#10;1 cup flour&#10;2 tbsp sugar&#10;3 tomatoes"
          rows={8}
          cols={50}
          aria-describedby="ingredients-instructions ingredients-helper-text"
        />
        <p id="ingredients-helper-text">
          Please use numbers and standard measuring amounts e.g. 1 cup flour
        </p>
      </div>
    </>
  );
};

export default IngredientEditor;
