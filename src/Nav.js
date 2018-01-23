import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="Nav bg-light text-dark d-flex align-items-center">
    <div class="d-flex flex-column">
      <img alt="logo" className="logo mb-1" src="/logo.png" />
      <span className="catch-phrase text-muted text-center font-weight-bold">
        simple collaborative code editing
      </span>
    </div>
  </nav>
);

export default Nav;
