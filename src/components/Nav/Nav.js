import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <nav className="navbar flex-row">
    <h1 className="most-left">
      <Link className="logo" to="/">
        Math Magicians
      </Link>
    </h1>
    <ul className="most-right">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="nav-link">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
