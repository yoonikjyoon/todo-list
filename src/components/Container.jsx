import React from "react";
import "../App.css";

export default function Container({ children }) {
  return (
    <div className="container">
      <div className="app-wrap">{children}</div>
    </div>
  );
}
