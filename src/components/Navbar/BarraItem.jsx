import React from "react";
import { NavLink } from "react-router-dom";

const BarraItem = ({ children, link = "", ...props }) => {
  if (!children) return;
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={link} {...props}>
        {children}
      </NavLink>
    </li>
  );
};

export default BarraItem;
