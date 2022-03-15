import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Components/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar header">
        <Link className="logo" to="/">
          LOGO NAME
        </Link>
        <NavLink className="text" to="/mission">
          MISSION
        </NavLink>
        <NavLink className="text" to="/features">
          FEATURES
        </NavLink>
        <NavLink className="text" to="/for-renters">
          FOR RENTERS
        </NavLink>
        <NavLink className="text" to="/for-owners">
          FOR OWNERS
        </NavLink>
        <NavLink className="text" to="/about-us">
          ABOUT US
        </NavLink>
        <NavLink className="text" to="/contact-us">
          CONTACT US
        </NavLink>
      </header>
    </>
  );
};

export default Navbar;
