import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
      <Link to="/" className="pl-8">
        CHING-YI SUNG
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          首頁
        </Link>
        <Link className="p-4 " to="/list">
          清單
        </Link>
        <Link className="p-4" to="/about">
          關於
        </Link>
        <Link className="p-4" to="/category">
          Category
        </Link>
        <Link
          className="p-4"
          to="#"
          onClick={(e) => {
            window.location = "mailto:jennifer.sung@skylinetw.com";
            e.preventDefault();
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
