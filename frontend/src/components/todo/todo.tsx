export type TodoProps = {
  id: number;
  title: string;
  status?: string;
};

const Todo = (props: TodoProps) => {
  return (
    <>
      <li>
        {props.id} : {props.title}
      </li>
    </>
  );
};

export default Todo;
