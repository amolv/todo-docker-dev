import { ITodo } from "../../types";
import TodoComp from "../todo";
import "./todolist.scss";

type TodoListCompProps = {
  todos: ITodo[];
};
const TodoListComp = (props: TodoListCompProps) => {
  const todos = JSON.parse(JSON.stringify(props.todos));
  console.log("new toods", todos);

  return (
    <div id="todolist">
      <ul className="header">
        <li>
          <span>Title:</span>
          <span>Status:</span>
        </li>
      </ul>

      <ul className="list">
        {todos.map((t: ITodo) => {
          return <TodoComp key={t.id} todo={t} />;
        })}
      </ul>
    </div>
  );
};

export default TodoListComp;
