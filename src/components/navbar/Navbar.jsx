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


// 1. У каждого у них должна быть аватарка и имя.
// 2. Данные о них должны храниться в state.js
// 3. Внимательно следи за запятыми при работе с объектами, часто на этом бывают ошибки, которые сложно найти.
// 4. Все данные прокинуть по пропсам и вывести в навбар.
// 5. Если уж сильно накосячил, то всегда можно скачать с гитхаба свой еще работающий проект ( после скачивания не забудь npm install)
