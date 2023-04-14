import React from 'react'
import './profile.css'
import ava from '../../img/profile-photo/elon'
import ava_min from '../../img/profile-photo/elon_mini'

function Profile() {
  return (
    <div className="profile">
        <div className="me">
            <img src={ava} alt="" />
            <p>Elon Mask</p>
        </div>
        <div className="posts">
            <input type="text" placeholder="" />
            <button> Add post</button>
            <div className="post">
                <img src={ava_min} alt="" />
                <span>Elon Mask</span>
                <p>Some text</p>
            </div>
        </div>
    </div>
  );
}

export default Profile;