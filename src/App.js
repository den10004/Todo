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

  const todosFalse = todos.filter(function (item) {
    return item.completed === true;
  });

  const createTodo = async (e) => {
    e.preventDefault(e);
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
      data: new Date(),
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
    <>
      <form onSubmit={createTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mbInput"
          type="text"
          placeholder="Добавить задачу"
        />
        <button className="bci" disabled={input === ""}>
          Добавить
        </button>
      </form>

      {todos.length < 1 ? (
        <p>Нет задач</p>
      ) : (
        <div className="list-counts">
          <p>{`Количество задач: ${todos.length}`}</p>
          <p>{`Количество решённых задач: ${todosFalse.length}`}</p>
        </div>
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
    </>
  );
}

export default App;
