import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
