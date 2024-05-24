import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

type EditorProps = {
  title?: string;
  dataSelector?: (state: RootState) => string[];
};

const EditorPreview: React.FC<EditorProps> = ({
  title,
  dataSelector,
}: EditorProps) => {
  const data = useSelector(dataSelector || (() => []));

  return (
    <div>
      <h3>{title}:</h3>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EditorPreview;
