import Direction from "./Direction.tsx";
import { DirectionListTypes, DirectionType } from "./DirectionType.ts";
import React from "react";

const DirectionList: React.FC<DirectionListTypes> = ({ directions }) => {
  return (
    <section>
      <div className="">
        <ol className="direction-list">
          {directions.map((direction: DirectionType, index: number) => (
            <Direction step={direction.step} key={index} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default DirectionList;
