import React, { useState, useCallback, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const readTodoList = () => {
    const todos = localStorage.getItem("todo");
    return todos ? JSON.parse(todos) : [];
  };
  const [todoList, setTodoList] = useState(readTodoList);

  const handleAdd = (addedTodo) => {
    const newList = {
      id: todoList.length + 1,
      todo: addedTodo,
      completed: false,
    };
    setTodoList([...todoList, newList]);
  };

  // const handleTodo = ()

  const handleDelete = (deletedTodo) => {
    setTodoList(todoList.filter((item) => item.id !== deletedTodo));
    // console.log("handleDelete : ", deletedTodo.id);
    // console.log(todoList.filter((item) => item.id !== deletedTodo.id));
  };

  useEffect(() => {
    console.log("todoList : ", todoList);
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoListContext.Provider
      value={{ todoList, readTodoList, handleAdd, handleDelete }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
