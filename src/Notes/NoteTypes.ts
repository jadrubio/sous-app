export type NoteType = {
  note: string;
  nested?: string[];
};

export type NoteListTypes = {
  notes: NoteType[];
};
