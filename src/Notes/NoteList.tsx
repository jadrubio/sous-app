import { NoteListTypes, NoteType } from "./NoteTypes.ts";
import Note from "./Note.tsx";

const NoteList = ({ notes }: NoteListTypes) => {
  return (
    <section>
      <h2>Notes</h2>
      <ul>
        {notes.map((note: NoteType, index: number) => (
          <Note key={index} note={note.note} nested={note.nested} />
        ))}
      </ul>
    </section>
  );
};

export default NoteList;
