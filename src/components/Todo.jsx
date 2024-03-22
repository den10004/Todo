import { convertDate } from "../utils/convertData";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  let dataTransform = `${convertDate(new Date(todo.data.toDate()))}`;

  return (
    <li className="card">
      <div className="card__wrapper">
        <div className={todo.completed ? "completed" : "not"}>
          <div className="card-wrap">
            <input
              onChange={() => toggleComplete(todo)}
              type="checkbox"
              checked={todo.completed ? "checked" : ""}
            />

            <p
              onClick={() => toggleComplete(todo)}
              className={todo.completed ? "" : ""}
            >
              {todo.text}
            </p>
          </div>
        </div>{" "}
      </div>
      <span>{dataTransform}</span>

      <button className="bcr" onClick={() => deleteTodo(todo.id)}>
        Удалить
      </button>
    </li>
  );
};

export default Todo;
