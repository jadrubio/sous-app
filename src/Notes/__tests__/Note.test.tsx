import { render, screen } from "@testing-library/react";
import { mockRecipe } from "../../mockData/mockRecipe.ts";
import Note from "../Note.tsx";

const mockNote = mockRecipe.notes[0];

describe("Note", () => {
  it("should render a note", () => {
    render(<Note note={mockNote.note} />);
    expect(screen.getByText(mockNote.note)).toBeInTheDocument();
  });

  it("should render nested notes", () => {
    render(<Note note={mockNote.note} nested={mockNote.nested} />);
    expect(screen.getByText(mockNote.nested[0])).toBeInTheDocument();
  });
});
