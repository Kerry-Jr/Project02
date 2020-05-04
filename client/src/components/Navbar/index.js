import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
   <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/"> page 1 </Link>
      </li>
      <li className="nav-item">
        <Link to="/discover"> page 2 </Link>
      </li>
      <li className="nav-item">
        <Link to="/search"> page 3 </Link>
      </li>
    </ul>

    <Link to='/blogs'>Blogs</Link>
  </div>
);

export default Navbar;
