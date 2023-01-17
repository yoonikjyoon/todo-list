import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <div className="footer-wrap">
      <div className="input-wrap">
        <input className="todo-input" placeholder="Add todo here" />
        <div className="button-add">Add</div>
      </div>
    </div>
  );
}
