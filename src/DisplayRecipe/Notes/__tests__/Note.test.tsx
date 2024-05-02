import { render, screen } from "@testing-library/react";
import Note from "../Note.tsx";

const mockNote = {
  note: "Main Note",
  nested: ["Nested Note 1", "Nested Note 2"],
};

describe("Note component", () => {
  it("renders main note text", () => {
    render(<Note note={mockNote.note} />);
    const mainNoteElement = screen.getByText(mockNote.note);
    expect(mainNoteElement).toBeInTheDocument();
  });

  it("renders nested notes when `nested` prop is provided", () => {
    render(<Note note={mockNote.note} nested={mockNote.nested} />);

    const mainNoteElement = screen.getByText(mockNote.note);
    expect(mainNoteElement).toBeInTheDocument();

    mockNote.nested.forEach((nestedNoteText) => {
      const nestedNoteElement = screen.getByText(nestedNoteText);
      expect(nestedNoteElement).toBeInTheDocument();
    });
  });

  it("does not render nested notes when `nested` prop is not provided", () => {
    render(<Note note={mockNote.note} />);

    const mainNoteElement = screen.getByText(mockNote.note);
    expect(mainNoteElement).toBeInTheDocument();

    const nestedListElement = screen.queryByRole("list");
    expect(nestedListElement).not.toBeInTheDocument();
  });
});
