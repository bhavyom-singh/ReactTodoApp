import style from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name){
    let newArray = todos.map(todo=>todo.name===name?{...todo, done:!todo.done}:todo)
    setTodos(newArray)
  }
  const todoCompleted = item.done? style.completed:""
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={todoCompleted} onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span>
          <button
            className={style.deleteButton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={style.line} />
    </div>
  );
}
