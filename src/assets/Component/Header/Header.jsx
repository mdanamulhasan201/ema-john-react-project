import React from 'react';
import logo from '../../../images/Logo.svg';
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="navbar header px-12">
      <img src={logo} alt="" />
        
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/shop'>Order</a></li>
            <li><a href='/order'>Order Review</a></li>
            <li><a href='/inventory'>Manage Inventory</a></li>
            <li><a href='/login'>Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;