import React from "react";

import "./Navbar.styles.sass";

const Navbar: React.FC = () => {
  // const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <a href='/'>gjorgjioski</a>
      </div>

      <div className='navbar__lis'>
        <a href='/projects'>Projects</a>
        <a href='/blog'>Blog</a>
        <a href='/about'>About</a>
      </div>
    </div>
  );
};

export default Navbar;
