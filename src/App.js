import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, removeTodo } from "./Components/Actions/action";

function App() {
  const [counter, setCouter] = useState(0);
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCouter(counter + 1);
      setTodo("");
    }
  };

  return (
    <div className="main-container">
      <h1>Todos</h1>
      <div className="todo">
        <input
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={todoSubmitHandler}>Add todo</button>
      </div>

      <div className="todos">
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <p>{todo.task}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
