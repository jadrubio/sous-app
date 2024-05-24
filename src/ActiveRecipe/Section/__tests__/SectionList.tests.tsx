import { fireEvent, render } from "@testing-library/react";
import SectionList from "../SectionList.tsx";

describe("SectionList Component", () => {
  const displayItems = [
    { info: "Item 1" },
    { info: "Item 2" },
    { info: "Item 3" },
  ];

  it("renders heading correctly", () => {
    const heading = "Test Heading";
    const { getByText } = render(
      <SectionList
        displayItems={displayItems}
        ordered={false}
        clickable={false}
        heading={heading}
      />,
    );
    expect(getByText(heading)).toBeInTheDocument();
  });

  it("renders items as an unordered list by default", () => {
    const { container } = render(
      <SectionList
        displayItems={displayItems}
        ordered={false}
        clickable={false}
        heading="Test Heading"
      />,
    );
    const listElement = container.querySelector("ul");
    expect(listElement).toBeInTheDocument();
  });

  it('renders items as an ordered list if "ordered" prop is true', () => {
    const { container } = render(
      <SectionList
        displayItems={displayItems}
        ordered={true}
        clickable={false}
        heading="Test Heading"
      />,
    );
    const listElement = container.querySelector("ol");
    expect(listElement).toBeInTheDocument();
  });

  it("renders the correct number of items", () => {
    const { container } = render(
      <SectionList
        displayItems={displayItems}
        ordered={false}
        clickable={false}
        heading="Test Heading"
      />,
    );
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(displayItems.length);
  });

  it('toggles "checked" class on item click', () => {
    const { container } = render(
      <SectionList
        displayItems={displayItems}
        ordered={false}
        clickable={true}
        heading="Test Heading"
      />,
    );
    const firstListItem = container.querySelector("li");
    expect(firstListItem).toBeInTheDocument();
    if (firstListItem) {
      fireEvent.click(firstListItem);
      expect(firstListItem).toHaveClass("checked");
      fireEvent.click(firstListItem);
      expect(firstListItem).not.toHaveClass("checked");
    }
  });
});
