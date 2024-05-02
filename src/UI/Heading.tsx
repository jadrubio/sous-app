export type HeadingPropType = {
  name: string;
};

const Heading = ({ name }: HeadingPropType) => {
  return <h2>{name}</h2>;
};

export default Heading;
