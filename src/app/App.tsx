import { FC } from "react";
import { Provider } from "react-redux";

import "./app.css";
import { store } from "./store";
import Todos from "../features/todos/components/Todos";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
