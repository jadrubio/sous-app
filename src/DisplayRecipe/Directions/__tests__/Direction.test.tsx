import { fireEvent, render, screen } from "@testing-library/react";
import Direction from "../Direction.tsx";

const mockStep = "Mix all ingredients.";
describe("Ingredient", () => {
  it("should render an ingredient", async () => {
    const { getByText } = render(<Direction step={mockStep} />);
    expect(getByText("Mix all ingredients.")).toBeInTheDocument();
  });

  it("should toggle the text styling", () => {
    render(<Direction step={mockStep} />);
    const step = screen.getByText(mockStep);
    expect(step).not.toHaveClass("checked");
    fireEvent.click(step);
    expect(step).toHaveClass("checked");
  });
});
