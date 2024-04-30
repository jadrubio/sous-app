import { NoteType } from "./NoteTypes.ts";

const Note = ({ note, nested }: NoteType) => {
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
