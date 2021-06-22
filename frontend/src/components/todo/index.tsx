import { ITodo } from "../../types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/todos-actions";
type Props = {
  todo: ITodo;
};
const TodoComp = (props: Props) => {
  const dispatch = useDispatch();
  const completeHandler = () => {
    dispatch(updateTodo(props.todo));
  };
  const deleteHandler = () => {
    dispatch(deleteTodo(props.todo.id));
  };
  return (
    <li>
      <span>{props.todo.title}</span>{" "}
      {!props.todo.completed && <button onClick={completeHandler}>Com</button>}
      <button onClick={deleteHandler}>X</button>{" "}
    </li>
  );
};

export default TodoComp;
