import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Navigationbar() {
  return (
    <nav className="nav-class">
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Favorites">Favorite</NavLink>
    </nav>
  );
}

export default Navigationbar;
