import React from "react";
import { NavLink } from "react-router-dom";

const BarraItem = ({ children, link=""}) => {
  if (!children) return 
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default BarraItem;
