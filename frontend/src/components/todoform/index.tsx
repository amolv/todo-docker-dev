import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/todos-actions";

type TodoFormCompProps = {
  updateTodos: Function;
};
const TodoFormComp = (props: TodoFormCompProps) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    }
  };

  const submitHandler = () => {
    dispatch(addNewTodo(title));
  };

  return (
    <form action="" className="">
      <input
        type="text"
        name="title"
        placeholder="Task..."
        onChange={handleChange}
      />
      <input type="button" value="Add todo" onClick={submitHandler} />
    </form>
  );
};

export default TodoFormComp;
