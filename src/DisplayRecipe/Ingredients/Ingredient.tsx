import React, { useState } from "react";
import { IngredientProp } from "./IngredientTypes.ts";
import "./styles.css";

const Ingredient: React.FC<IngredientProp> = ({ ingredient }) => {
  const { quantity, unit, item } = ingredient;
  const checkBoxElem = `${quantity}${unit}${item}Checkbox`;
  const [isChecked, setIsChecked] = useState(false);
  const checkedStyle = isChecked ? " checked" : "";

  return (
    <li className="ingredient-item">
      <input
        type="checkbox"
        value=""
        onClick={() => setIsChecked(!isChecked)}
        defaultChecked={isChecked}
        id={checkBoxElem}
      />
      <label className={checkedStyle} htmlFor={checkBoxElem}>
        <span className="quantity">{quantity}</span>
        <span className="unit">{unit}</span>
        <span className="item">{item}</span>
      </label>
    </li>
  );
};

export default Ingredient;
