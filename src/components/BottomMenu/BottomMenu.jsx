import React from "react";
import "./BottomMenu.css";
import { AiFillHome, AiOutlineAppstore, AiFillProject, AiFillInfoCircle } from "react-icons/ai";

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <a href="#home" className="menu-item">
        <AiFillHome size={24} />
        <span>Home</span>
      </a>
      <a href="#portfolio" className="menu-item">
        <AiFillProject size={24} />
        <span>Portfolio</span>
      </a>
      <a href="#services" className="menu-item">
        <AiOutlineAppstore size={24} />
        <span>Services</span>
      </a>
      <a href="#about" className="menu-item">
        <AiFillInfoCircle size={24} />
        <span>About</span>
      </a>
    </div>
  );
};

export default BottomMenu;
