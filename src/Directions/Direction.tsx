import { useState } from "react";
import { DirectionType } from "./DirectionType.ts";
import "./styles.css";

const Direction = ({ step }: DirectionType) => {
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
