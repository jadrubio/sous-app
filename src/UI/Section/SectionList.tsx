import React from "react";
import SectionItem from "./SectionItem.tsx";
import { SectionListProps } from "./SectionTypes.ts";

const SectionList: React.FC<SectionListProps> = ({
  displayItems,
  ordered = false,
  clickable = false,
  heading,
}) => {
  const ListComponent = ordered ? "ol" : "ul";

  return (
    <section aria-labelledby={`${heading}-section-heading`}>
      <h2 id={`${heading}-section-heading`}>{heading}</h2>
      <div className="section-list-container">
        <ListComponent className="section-list">
          {displayItems.map((item) => (
            <SectionItem
              key={item.info}
              info={item.info}
              clickable={clickable}
            />
          ))}
        </ListComponent>
      </div>
    </section>
  );
};

export default SectionList;
