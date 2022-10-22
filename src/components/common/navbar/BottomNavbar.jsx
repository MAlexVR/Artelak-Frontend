import React, { useState } from "react";
import "../../../assets/styles/bottom-nabvar.css";
import {
  FaHome,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";

function BottomNavbar() {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      icon: <FaHome size={25} />,
      name: "Inicio",
      url: "#",
    },
    {
      icon: <FaUser size={25} />,
      name: "Ingresar",
      url: "#",
    },
    {
      icon: <FaHeart size={25} />,
      name: "Favoritos",
      url: "#",
    },
    {
      icon: <FaShoppingCart size={25} />,
      name: "Carrito",
      url: "#"
    },
    {
      icon: <FaBars size={25} />,
      name: "Settings",
      url: "#",
    },
  ];

  return (
    <div className="bottom__nav">
      <ul className="nav__ul">
        {menus.map((val, index) => {
          return (
            <li
              onClick={() => setSelected(index)}
              key={index}
              className={`nav__li ${index === selected ? "active" : ""}`}
            >
              <a href={val.url} className="nav__icon">
                {val.icon}
              </a>
              <span className="nav__name">{val.name}</span>
            </li>
          );
        })}
        <div className="nav__indicator" />
      </ul>
    </div>
  );
}

export default BottomNavbar;
