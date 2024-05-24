import { fireEvent, render } from "@testing-library/react";
import SectionItem from "../SectionItem.tsx";

describe("SectionItem", () => {
  const defaultProps = {
    info: "Test Info",
    clickable: false,
  };

  it("renders info text correctly", () => {
    const { getByText } = render(<SectionItem {...defaultProps} />);
    expect(getByText("Test Info")).toBeInTheDocument();
  });

  it("applies correct className based on props", () => {
    const { container } = render(<SectionItem {...defaultProps} />);
    expect(container.firstChild).toHaveClass("displayItem-item");
  });

  it('does not apply "checked" class when not clickable', () => {
    const { container } = render(<SectionItem {...defaultProps} />);
    expect(container.firstChild).not.toHaveClass("checked");
  });

  it('applies "checked" class when clicked and component is clickable', () => {
    const { getByRole } = render(<SectionItem {...defaultProps} clickable />);
    const item = getByRole("button");

    expect(item).not.toHaveClass("checked");
    fireEvent.click(item);
    expect(item).toHaveClass("checked");
  });

  it('applies "checked" class on Enter key press when clickable', () => {
    const { getByRole } = render(<SectionItem {...defaultProps} clickable />);
    const item = getByRole("button");

    expect(item).not.toHaveClass("checked");
    fireEvent.keyDown(item, { key: "Enter", keyCode: 13 });
    expect(item).toHaveClass("checked");
  });

  it("calls handleToggle on Space key press when clickable", () => {
    const { getByRole } = render(<SectionItem {...defaultProps} clickable />);
    const item = getByRole("button");

    expect(item).not.toHaveClass("checked");
    fireEvent.keyDown(item, { key: " ", keyCode: 32 });
    expect(item).toHaveClass("checked");
  });
});
