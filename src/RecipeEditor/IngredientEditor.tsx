import React, { useState, ChangeEvent } from "react";
import "./styles.css";

const IngredientEditor: React.FC = () => {
  const [ingredientsText, setIngredientsText] = useState("");
  const [ingredientsArray, setIngredientsArray] = useState<string[]>([]);

  const parseIngredients = (text: string): string[] => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
    return lines;
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setIngredientsText(newText);

    const parsedIngredients = parseIngredients(newText);
    setIngredientsArray(parsedIngredients);
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

      <div>
        <h3>Parsed Ingredients:</h3>
        <ul>
          {ingredientsArray.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IngredientEditor;
