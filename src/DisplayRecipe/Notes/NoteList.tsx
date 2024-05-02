import React from "react";
import { NoteListTypes, NoteType } from "./NoteTypes.ts";
import Note from "./Note.tsx";

const NoteList: React.FC<NoteListTypes> = ({ notes }) => {
  return (
    <section>
      <ul>
        {notes.map((note: NoteType, index: number) => (
          <Note key={index} note={note.note} nested={note.nested} />
        ))}
      </ul>
    </section>
  );
};

export default NoteList;
