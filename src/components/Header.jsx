import React, { useContext, useState } from "react";
import "../App.css";
import { BsSun, BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";

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
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="header-wrap">
      <button onClick={() => toggleDarkMode()}>
        {darkMode ? <BsFillSunFill /> : <BsSun />}
      </button>
      <ul className="menu-wrap">
        {menu.map((item, index) => (
          <div
            key={index}
            className="menu-item"
            onClick={() => console.log(item)}
          >
            <li>{item.menuName}</li>
            {item.isActive && <div className="active-line" />}
          </div>
        ))}
      </ul>
    </div>
  );
}
