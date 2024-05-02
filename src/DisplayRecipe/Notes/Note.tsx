import React from "react";
import { NoteType } from "./NoteTypes.ts";

const Note: React.FC<NoteType> = ({ note, nested }) => {
  return (
    <li>
      {note}
      {nested ? (
        <ul>
          {nested.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default Note;
