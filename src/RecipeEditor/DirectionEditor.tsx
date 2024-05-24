import React, { useState, ChangeEvent } from "react";
import { parseStringToArray } from "../utils/parsing.ts";
import { updateDirections } from "../store/directionSlice.ts";
import { useDispatch } from "react-redux";
import "./styles.css";

const DirectionEditor: React.FC = () => {
  const dispatch = useDispatch();

  const [directionsText, setDirectionsText] = useState("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setDirectionsText(newText);
    const parsedDirections = parseStringToArray(newText);
    dispatch(updateDirections(parsedDirections));
  };

  return (
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
  );
};

export default DirectionEditor;
