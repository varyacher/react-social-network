import React from 'react'
import './header.css'
import logo from '../../img/icons/icon.svg'

function Header() {
  return (
    <div className="header">
        <img src={logo} />
    </div>
  );
}

export default Header;