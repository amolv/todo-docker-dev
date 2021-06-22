import React, { useEffect } from "react";
import "./App.scss";
import Notifications from "./components/notifications/notification";
import TodoFormComp from "./components/todoform";
import TodoListComp from "./components/todolist";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ITodo } from "./types";
import { fetchTodos } from "./store/todos-actions";

let onLoad = true;

function App() {
  const notes = useSelector((state: RootStateOrAny) => state.ui.notifications);

  const todos = useSelector((state: RootStateOrAny) => state.todos.todos);
  console.log("todosss", todos);

  const dispatch = useDispatch();
  useEffect(() => {
    if (onLoad) dispatch(fetchTodos());
    onLoad = false;
  }, [dispatch]);

  const updateTodos = (newTodo: ITodo) => {
    //setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <Notifications
        title={notes.title}
        message={notes.message}
        status={notes.status}
      />
      <header className="App-header">
        <p>Todos</p>
      </header>
      <p>Total todos : {todos.length}</p>
      <TodoFormComp updateTodos={updateTodos} />
      <div className="wrapper">
        <TodoListComp todos={todos} />
      </div>
    </div>
  );
}

export default App;
