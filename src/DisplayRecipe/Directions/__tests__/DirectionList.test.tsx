import { mockRecipe } from "../../../mockData/mockRecipe.ts";
import DirectionList from "../DirectionList.tsx";
import { render, screen } from "@testing-library/react";

describe("Direction List", () => {
  it("should render the heading", () => {
    render(<DirectionList directions={mockRecipe.directions} />);
    expect(
      screen.getByRole("heading", { name: "Directions" }),
    ).toBeInTheDocument();
  });

  it("should render a list of Ingredients", async () => {
    const { findAllByRole } = render(
      <DirectionList directions={mockRecipe.directions} />,
    );
    const ingredients = await findAllByRole("listitem");
    expect(ingredients).toHaveLength(2);
  });
});
