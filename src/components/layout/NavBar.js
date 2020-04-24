import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> Covid 19 Info Page
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/country">Countries</Link>
        </li>
        <li>
          <Link to="/report">Reports</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
