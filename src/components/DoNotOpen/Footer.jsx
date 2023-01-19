import React from "react";
import "../../App.css";
import { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import { useState } from "react";

export default function Footer() {
  const { handleAdd } = useContext(TodoListContext);
  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim().length === 0) {
      return;
    }
    handleAdd(todoText);
    setTodoText("");
  };
  return (
    <div className="footer-wrap">
      <form className="input-wrap" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add todo here"
          onChange={handleChange}
          value={todoText}
        />
        {/* <div className="button-add" onClick={handleAdd(todo)}> */}
        <button className="button-add">Add</button>
      </form>
    </div>
  );
}
