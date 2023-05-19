import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar">
        <NavLink to="/profile">PROFILE</NavLink>
        <NavLink to="/messages">MESSAGES</NavLink>
        <NavLink to="/users">USERS</NavLink>
        <NavLink to="/dialogs">DIALOGS</NavLink>
    </div>
  );
}

export default Navbar;