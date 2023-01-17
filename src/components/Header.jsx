import React, { useState } from "react";
import "../App.css";
import { BsSun, BsFillSunFill } from "react-icons/bs";

export default function Header() {
  const [menu, setMenu] = useState([
    {
      menuName: "All",
      isActive: true,
    },
    {
      menuName: "Active",
      isActive: false,
    },
    {
      menuName: "Completed",
      isActive: false,
    },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="header-wrap">
      <button onClick={() => setIsDarkMode((prev) => !prev)}>
        {isDarkMode ? <BsFillSunFill /> : <BsSun />}
      </button>
      <ul className="menu-wrap">
        {menu.map((item, index) => (
          <div className="menu-item" onClick={() => console.log(item)}>
            <li key={index}>{item.menuName}</li>
            {item.isActive && <div className="active-line" />}
          </div>
        ))}
      </ul>
    </div>
  );
}
