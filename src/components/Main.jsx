import React, { useState } from "react";
import "../App.css";
import { FaTrashAlt } from "react-icons/fa";

export default function Main() {
  const [list, setList] = useState([
    { id: 0, todo: "청소하기", completed: false },
    { id: 1, todo: "장보기", completed: false },
    { id: 2, todo: "운동하기", completed: false },
  ]);
  return (
    <div className="main-wrap">
      {list.length > 0 ? (
        list.map((item) => (
          <div className="todo-list-wrap" key={item.id}>
            <div className="checkbox-wrap">
              <input type="checkbox" id={item.id} />
              <label htmlFor={item.id}></label>
            </div>
            {item.todo}
            <div className="trash-wrap">
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
