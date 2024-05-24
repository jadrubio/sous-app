import React, { useId, useState } from "react";
import { IngredientProp } from "./IngredientTypes.ts";

const Ingredient: React.FC<IngredientProp> = ({ ingredient }) => {
  const checkBoxElem = useId();
  const { quantity, unit, item } = ingredient;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsChecked(!isChecked);
    }
  };

  return (
    <li className="ingredient-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onKeyDown={handleKeyDown}
        id={checkBoxElem}
      />
      <label className={isChecked ? "checked" : ""} htmlFor={checkBoxElem}>
        <span className="quantity">{quantity}</span>
        <span className="unit">{unit}</span>
        <span className="item">{item}</span>
      </label>
    </li>
  );
};

export default Ingredient;
