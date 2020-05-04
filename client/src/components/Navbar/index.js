import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to='/counter'>Counter</Link>
    <Link to='/todos'>Todos</Link>
  </div>
);

export default Navbar;
