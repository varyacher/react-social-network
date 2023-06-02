import React from 'react'
import ava from '../../../img/profile-photo/elon'
import ava_min from '../../../img/profile-photo/elon_mini'
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