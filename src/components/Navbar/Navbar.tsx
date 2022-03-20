import React from "react";

import "./Navbar.styles.sass";

const Navbar: React.FC = () => {
  // const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h4>gjorgjioski</h4>
      </div>

      <div className='navbar__lis'>
        <h4 className='navbar__lis-li'>About</h4>
        <h4 className='navbar__lis-li'>Blog</h4>
        <h4 className='navbar__lis-li'>Projects</h4>
      </div>
    </div>
  );
};

export default Navbar;
