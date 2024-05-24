import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { parseStringToArray } from "../utils/parsing.ts";
import { updateNotes } from "../store/noteSlice.ts";

const NoteEditor: React.FC = () => {
  const dispatch = useDispatch();
  const [notesText, setNotesText] = useState("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setNotesText(newText);
    const parsedNotes = parseStringToArray(newText);
    dispatch(updateNotes(parsedNotes));
  };

  return (
    <div>
      <p>Enter notes (use indentation for nesting):</p>
      <textarea
        value={notesText}
        onChange={handleTextareaChange}
        placeholder="Enter notes here..."
        rows={10}
        cols={50}
      />
    </div>
  );
};

export default NoteEditor;
