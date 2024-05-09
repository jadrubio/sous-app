import { fireEvent, render } from "@testing-library/react";
import Ingredient from "../Ingredient.tsx";

const mockIngredient = {
  quantity: 12,
  unit: "grams",
  item: "salt",
};
describe("Ingredient", () => {
  it("should render an ingredient", async () => {
    const { getByText } = render(<Ingredient ingredient={mockIngredient} />);
    expect(getByText(12)).toBeInTheDocument();
    expect(getByText("grams")).toBeInTheDocument();
    expect(getByText("salt")).toBeInTheDocument();
  });

  it("should toggle the checkbox", () => {
    const { getByRole } = render(<Ingredient ingredient={mockIngredient} />);
    const checkbox = getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
