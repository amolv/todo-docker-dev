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

  const dispatch = useDispatch();
  useEffect(() => {
    if (onLoad) dispatch(fetchTodos());
    onLoad = false;
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Todos</p>
      </header>
      <div className="todoStats">
        <span>Total todos : {todos.length}</span>
        <span>
          Completed : {todos.filter((t: ITodo) => t.completed).length}
        </span>
      </div>
      <TodoFormComp />
      <div className="wrapper">
        <TodoListComp todos={todos} />
      </div>
      <Notifications
        title={notes.title}
        message={notes.message}
        status={notes.status}
      />
    </div>
  );
}

export default App;
