import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  console.log(todos);

  return (
    <div>
      <h1 className={styles.title}>My Todos({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="enter your todo" value={todo} onChange={onChange} />
        <button>add to do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
