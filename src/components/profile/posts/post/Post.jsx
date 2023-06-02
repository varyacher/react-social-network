import React from 'react'
import './../../profile.css'
import ava_min from '../../../../img/profile-photo/elon_mini'

function Post(props) {
  return (
    <div className="post">
        <img src={ava_min} alt="" />
        <span>Elon Mask</span>
        <p>{props.message}</p>
        <span>likes {props.likes}</span>
    </div>
  );
}

export default Post;