import React, { useState, ChangeEvent } from "react";
import "./styles.css";

const DirectionEditor: React.FC = () => {
  const [directionsText, setDirectionsText] = useState("");
  const [directionsArray, setDirectionsArray] = useState<string[]>([]);

  // Helper function to parse directions
  const parseDirections = (text: string): string[] => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
    return lines;
  };

  // Handle textarea change
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setDirectionsText(newText);

    // Parse directions as the user types
    const parsedDirections = parseDirections(newText);
    setDirectionsArray(parsedDirections);
  };

  return (
    <>
      <div className="direction-input-container">
        <label htmlFor="directions-textarea">
          Enter the steps for your recipe (one per line)
        </label>
        <textarea
          id="directions-textarea"
          value={directionsText}
          onChange={handleTextareaChange}
          placeholder="Mix water, yeast, and honey."
          rows={8}
          cols={50}
          aria-describedby="directions-instructions"
        />
      </div>

      <div>
        <ul>
          {directionsArray.map((direction, index) => (
            <li key={index}>{direction}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DirectionEditor;
