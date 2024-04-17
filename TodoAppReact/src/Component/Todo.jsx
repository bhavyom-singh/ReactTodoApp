import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  //   const [todo, setTodo] = useState("");
  //   const [todos, setTodos] = useState([]);
  //   function handleSubmit(e) {
  //     e.preventDefault(); // to prevent data loss in the text field and to stop page refresh
  //     // setTodos(todo) => wont work, need an array
  //     // setTodos([todo]) => wont work, create a new array everytime
  //     // try console.log(todos) down below
  //     // now try using spread operator to add todo to todos
  //     setTodos([...todos, todo]);

  //     //now lets empty the textbox
  //     setTodo("");
  //   }

  let completedTodos = todos.filter((todo) => todo.done).length;
  let totalTodos = todos.length;
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form> */}
      <Form todos={todos} setTodos={setTodos} />
      {/* {console.log(todos)} */}
      {/* {todos} */}
      {/* lets loop through all the todos to display them individually */}

      {/* this could be difficuly to understand, so in React what we typically do in such cases
      is we create a separate component for code that returns JSX code. */}

      {/* {todos.map((item) => (
        <h3>{item}</h3>
      ))} */}

      {/* {todos.map((item) => (
        <TodoItem key={item} item={item}/>
      ))} */}
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
