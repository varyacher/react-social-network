import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import Friend from './../friends/friend/Friend.jsx'
function Navbar(props) {
  return (
    <div className="navbar">
        <NavLink to="/profile">PROFILE</NavLink>
        <NavLink to="/messages">MESSAGES</NavLink>
        <NavLink to="/users">USERS</NavLink>
        <NavLink to="/dialogs">DIALOGS</NavLink>
        <div>
            <p>FRIENDS</p>
            <div className="friends">
                {props.friendsPage.friendData.map((el)=>{
                    return(
                        <NavLink to="/dialogs">
                            <img src={el.avatar} alt="" />
                            <br />
                            <p>{el.name}</p>
                        </NavLink>
                        )
                })}
            </div>
        </div>
        {/*{props.friendData.map((el)=><Friend name={el.name} id={el.id} avatar={el.avatar}/>)}*/}
    </div>
  );
}

export default Navbar;


