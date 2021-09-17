import React from "react";
import { Link } from "react-router-dom";
const DropDown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-ceter bg-red-800 text-white"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        首頁
      </Link>
      <Link className="p-4" to="/list">
        清單
      </Link>
      <Link className="p-4" to="/About">
        關於
      </Link>
      <Link
        className="p-4"
        to="#"
        onClick={(e) => {
          window.location = "mailto:big50201@gmail.com";
          e.preventDefault();
        }}
      >
        Contact
      </Link>
    </div>
  );
};

export default DropDown;
