import Direction from "./Direction.tsx";
import { DirectionListTypes, DirectionType } from "./DirectionType.ts";

const DirectionList = ({ directions }: DirectionListTypes) => {
  return (
    <section>
      <h3>Directions</h3>
      <div className="">
        <ol className="">
          {directions.map((direction: DirectionType, index: number) => (
            <Direction step={direction.step} key={index} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default DirectionList;
