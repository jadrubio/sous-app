import { render, screen } from "@testing-library/react";
import IngredientList from "../IngredientList.tsx";
import { mockRecipe } from "../../../mockData/mockRecipe.ts";

describe("Ingredient List", () => {
  it("should render the heading", () => {
    render(<IngredientList ingredients={mockRecipe.ingredients} />);
    expect(
      screen.getByRole("heading", { name: "Ingredients" }),
    ).toBeInTheDocument();
  });

  it("should render a list of Ingredients", async () => {
    const { findAllByRole } = render(
      <IngredientList ingredients={mockRecipe.ingredients} />,
    );
    const ingredients = await findAllByRole("listitem");
    expect(ingredients).toHaveLength(5);
  });
});
