import { FC } from "react";

import { useGetTodosQuery } from "../todosApi";
import TodoItem from "./TodoItem";

const TodosList: FC = () => {
  const { data: todos, isLoading } = useGetTodosQuery();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {isLoading && <p>Loading todos...</p>}
      {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodosList;
