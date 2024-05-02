import React, { useState } from "react";
import "./styles.css";
import { DirectionType } from "./DirectionType.ts";

const Direction: React.FC<DirectionType> = ({ step }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkedStyle = isChecked ? " checked" : "";

  return (
    <li
      onClick={() => setIsChecked(!isChecked)}
      className={`direction-item ${checkedStyle}`}
    >
      {step}
    </li>
  );
};

export default Direction;
