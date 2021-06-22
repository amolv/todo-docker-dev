import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types";

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    listTodos: (state, action) => {
      console.log("listTodos ", state, action);
      return {
        ...state,
        todos: action.payload,
      };
    },
    completeTodoList: (state, action) => {
      const updatedTodoList = [...state.todos];
      updatedTodoList.map((t) => {
        t.completed =
          t.id === action.payload.id ? action.payload.completed : t.completed;
        return t;
      });
      return {
        ...state,
        todos: updatedTodoList,
      };
      return state;
    },
    updateTodoList: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    updateTodoListAfterDelete: (state, action) => {
      const updatedTodos = state.todos.filter((t) => {
        return t.id !== action.payload;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    },
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice;
