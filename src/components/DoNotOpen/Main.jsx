import React, { useState, useEffect } from "react";
import "../../App.css";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";

export default function Main() {
  const { todoList, handleDelete } = useContext(TodoListContext);
  const handleChange = (e) => {};
  return (
    <div className="main-wrap">
      {todoList.length > 0 ? (
        todoList.map((item, index) => (
          // <div className="todo-list-wrap" key={item.id}>
          <div className="todo-list-wrap" key={index}>
            <div className="checkbox-wrap">
              <input type="checkbox" id={item.id} />
              <label htmlFor={item.id}></label>
            </div>
            {item.todo}
            <div className="trash-wrap" onClick={() => console.log(item.id)}>
              {/* <div className="trash-wrap" onClick={handleDelete(item)}> */}
              <FaTrashAlt color="white" size="0.8rem" />
            </div>
          </div>
        ))
      ) : (
        <div>등록된 항목이 없습니다</div>
      )}
    </div>
  );
}
