import React from "react";
import IngredientEditor from "./IngredientEditor.tsx";
import DirectionEditor from "./DirectionEditor.tsx";
import NoteEditor from "./NoteEditor.tsx";
import EditorPreview from "./EditorPreview.tsx";
import {
  selectDirections,
  selectIngredients,
  selectNotes,
} from "../store/selectors.ts";
import "../ActiveRecipe/styles.css";

const EditRecipe: React.FC = () => {
  return (
    <>
      <div className="editor-container">
        <IngredientEditor />
        <EditorPreview title="Ingredients" dataSelector={selectIngredients} />
      </div>
      <div className="editor-container">
        <DirectionEditor />
        <EditorPreview title="Directions" dataSelector={selectDirections} />
      </div>
      <div className="editor-container">
        <NoteEditor />
        <EditorPreview title="Notes" dataSelector={selectNotes} />
      </div>
    </>
  );
};

export default EditRecipe;
