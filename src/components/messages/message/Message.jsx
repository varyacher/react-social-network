import React from 'react'
import './../messages.css'

function Message(props) {
  return (
    <div className="message">
      <p>{props.message}</p>
    </div>
  );
}

export default Message;