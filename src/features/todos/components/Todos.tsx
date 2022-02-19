import { FC } from "react";

import AddTodoForm from "./AddTodoForm";
import TodosList from "./TodosList";

const Todos: FC = () => {
  return (
    <main style={{ padding: "2rem 2rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>Todos</h1>
      <div style={{ maxWidth: "20rem" }}>
        <TodosList />
        <AddTodoForm />
      </div>
    </main>
  );
};

export default Todos;
