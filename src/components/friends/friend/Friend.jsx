import React from 'react'
import './../friends.css'


function Friend(props) {
  return (
    <div className="friend">
      <p>{props.name}</p>
      <img src="{props.avtar}" alt="" />
    </div>
  );
}

export default Friend;