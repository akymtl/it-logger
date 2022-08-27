import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => (
  <>
    <nav className='blue nav-placement'>
      <div className='nav-wrapper'>
        <Link to="/" className="brand-logo">IT Logger</Link>
        <div className='right'>
          <Link to="/logs" className="waves-effect waves-light btn">Logs</Link>
          &nbsp;
          <Link to="/techs" className="waves-effect waves-light btn">Techs</Link>
        </div>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
