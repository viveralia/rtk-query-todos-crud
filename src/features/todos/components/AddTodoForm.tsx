import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAddTodoMutation } from "../todosApi";

const AddTodoForm: FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo({ title: newTodo, isCompleted: false });
    setNewTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "2rem",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "65% 35%",
      }}
    >
      <input
        type="text"
        placeholder="Type your todo"
        name="todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodoForm;
