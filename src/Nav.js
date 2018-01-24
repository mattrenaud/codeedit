import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="Nav bg-light text-dark d-flex align-items-center">
    <div className="d-flex flex-column">
      <img className="logo mb-1" alt="logo" src="/logo.png" />
      <span className="catch-phrase text-muted text-center font-weight-bold">
        simple collaborative code editing
      </span>
    </div>
  </nav>
);

export default Nav;
