import { convertDate } from "../utils/convertData";

// eslint-disable-next-line react/prop-types
const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  // eslint-disable-next-line react/prop-types
  let dataTransform = `${convertDate(new Date(todo.data.toDate()))}`;

  return (
    // eslint-disable-next-line react/prop-types
    <li className="card">
      <div className="card__wrapper">
        <div className={todo.completed ? "completed" : "not"}>
          <div className="card-wrap">
            <input
              onChange={() => toggleComplete(todo)}
              type="checkbox"
              // eslint-disable-next-line react/prop-types
              checked={todo.completed ? "checked" : ""}
            />

            <p
              onClick={() => toggleComplete(todo)}
              // eslint-disable-next-line react/prop-types
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
