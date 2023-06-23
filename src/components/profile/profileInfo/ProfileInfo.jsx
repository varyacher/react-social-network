import React from 'react'
import ava from '../../../img/profile-photo/elon.jpg'
import ava_min from '../../../img/profile-photo/elon_mini.jpg'
import Posts from '../posts/Posts'

function ProfileInfo(props) {
  return (
      <div className="me">
          <img src={ava} alt="" />
          <p>{props.name}</p>
          <p>Место проживания: почти марс</p>
      </div>
  );
}

export default ProfileInfo;