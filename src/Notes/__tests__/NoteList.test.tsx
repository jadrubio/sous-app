import { render, screen } from "@testing-library/react";
import NoteList from "../NoteList.tsx";
import { mockRecipe } from "../../mockData/mockRecipe";

describe("Direction List", () => {
  it("should render the heading", () => {
    render(<NoteList notes={mockRecipe.notes} />);
    expect(screen.getByRole("heading", { name: "Notes" })).toBeInTheDocument();
  });

  it("should render a list of Ingredients", async () => {
    const { findAllByRole } = render(<NoteList notes={mockRecipe.notes} />);
    const ingredients = await findAllByRole("listitem");
    expect(ingredients).toHaveLength(3);
  });
});
