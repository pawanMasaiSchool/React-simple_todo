import { useState } from "react";
import Input from "../Input.jsx/Input";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleCreationOfTodoElement = (name) => {
    const payload = {
      title: name,
      status: "false"
    };
    setTodos([...todos, payload]);
  };

  // console.log(todos);

  return (
    <>
      <div className={styles.myTodo}>
        <TodoList myTodos={todos} />
        <Input CreatingTask={handleCreationOfTodoElement} />
      </div>
    </>
  );
}
