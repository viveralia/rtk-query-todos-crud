import { FC } from "react";

import { Todo } from "../models/Todo";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../todosApi";

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleToggleCheckbox = async () => {
    await updateTodo({ ...todo, isCompleted: !todo.isCompleted });
  };

  const handleDeleteTodo = async () => {
    await deleteTodo(todo);
  };

  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        gap: "0.5rem",
        gridTemplateColumns: "70% 10% 20%",
      }}
    >
      <label
        htmlFor={todo.id.toString()}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.title}
      </label>
      <input
        id={todo.id.toString()}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleToggleCheckbox}
      />
      <button disabled={!todo.isCompleted} onClick={handleDeleteTodo}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
