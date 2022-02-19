import React from "react";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <header className="navbar">
      <a href="/" className="logo--link">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="react"
          height="20"
        />
        <span>React</span>
      </a>

      <div className="navbar items">
        <li className="list">Docs</li>
        <li className="list">Tutorial</li>
        <li className="list">Blog</li>
        <li className="list">Community</li>
      </div>

      <div className="right--items">
        <AiOutlineSearch fill="white" className="search--icon" />
        <input type="text" placeholder="Search" />

        <li className="list">v17.0.2</li>
        <li className="list">Languages</li>
        <li className="list">Github</li>
      </div>
    </header>
  );
}

export default Header;
