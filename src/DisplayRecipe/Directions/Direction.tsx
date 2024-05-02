import React, { useState } from "react";
import { DirectionType } from "./DirectionType";

const Direction: React.FC<DirectionType> = ({ step }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <li
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={`direction-item ${isChecked ? "checked" : ""}`}
      aria-pressed={isChecked}
    >
      {step}
    </li>
  );
};

export default Direction;
