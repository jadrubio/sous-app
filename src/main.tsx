import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import "./global-styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
