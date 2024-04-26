import { useState } from "react";
import { IngredientProp } from "./IngredientTypes.ts";
import "./styles.css";

const Ingredient = ({ ingredient }: IngredientProp) => {
  const { quantity, unit, item } = ingredient;
  const checkBoxElem = `${quantity}${unit}${item}Checkbox`;
  const [isChecked, setIsChecked] = useState(false);
  const checkedStyle = isChecked ? " checked" : "";

  return (
    <>
      <li className="list-group-item">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          onClick={() => setIsChecked(!isChecked)}
          defaultChecked={isChecked}
          id={checkBoxElem}
        />
        <label
          className={`form-check-label ${checkedStyle}`}
          htmlFor={checkBoxElem}
        >
          <span className="quantity">{quantity}</span>
          <span className="unit">{unit}</span>
          <span className="item">{item}</span>
        </label>
      </li>
    </>
  );
};

export default Ingredient;
