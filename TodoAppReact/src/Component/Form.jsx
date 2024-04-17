import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={style.todoform} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value, done:false})}
          placeholder="Enter Todo Item"
        />
        <button type="submit" className={style.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
