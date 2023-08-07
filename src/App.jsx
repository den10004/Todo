import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const createTodo = async (e) => {
    e.preventDefault(e);
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  return (
    <div className="">
      <form onSubmit={createTodo} className="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mbInput"
          type="text"
          placeholder="Add Todo"
        />
        <button className="bci" disabled={input === ""}>
          Добавить
        </button>
      </form>

      {todos.length < 1 ? (
        <p>Нет задач</p>
      ) : (
        <p>{`Количество задач: ${todos.length}`}</p>
      )}
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
