import React, { useState } from "react";
import { SectionItemProps } from "./SectionTypes.ts";

const SectionItem: React.FC<SectionItemProps> = ({
  info,
  clickable = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (clickable && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleToggle();
    }
  };

  const itemClassName = `displayItem-item ${clickable && isChecked ? "checked" : ""}`;

  return (
    <li
      role={clickable ? "button" : undefined}
      onClick={clickable ? handleToggle : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={handleKeyDown}
      className={itemClassName}
      aria-pressed={clickable ? isChecked : undefined}
    >
      {info}
    </li>
  );
};

export default SectionItem;
