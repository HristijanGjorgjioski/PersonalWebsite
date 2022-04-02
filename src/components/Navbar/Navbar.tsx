import React from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.styles.sass";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h4 onClick={() => navigate("/")}>gjorgjioski</h4>
      </div>

      <div className='navbar__lis'>
        <h4 onClick={() => navigate("/projects")}>Projects</h4>
        <h4 onClick={() => navigate("/blog")}>Blog</h4>
        <h4 onClick={() => navigate("/about")}>About</h4>
      </div>
    </div>
  );
};

export default Navbar;
