import React from 'react'
import './profile.css'
import ava from '../../img/profile-photo/elon'
import ava_min from '../../img/profile-photo/elon_mini'
import Posts from './posts/Posts'

function Profile(props) {
  return (
    <div className="profile">
        <div className="me">
            <img src={ava} alt="" />
            <p>{props.name}</p>
            <p>Место проживания: почти марс</p>
        </div>
        <Posts/>
    </div>
  );
}

export default Profile;



// Добавить в описание профиля статус, город проживания + css
