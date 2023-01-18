import React from "react";
import { createContext, useState } from "react";

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [list, setList] = useState([]);
  return <TodoListContext.Provider>{children}</TodoListContext.Provider>;
}
