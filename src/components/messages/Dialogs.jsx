import React from 'react'
import './messages.css'
import Message from './message/Message'
import DialogsItem from './dialogsItem/dialogsItem'
import {NavLink} from 'react-router-dom'



let messageText = React.createRef()


function Dialogs(props) {
  let addMessage = ()=>{
    props.addMessage(messageText.current.value)
    messageText.current.value = ""
  }
  let onMessageChange = ()=>{
    props.onMessageChange(messageText.current.value)
  }
  return (
    <div className="dialogs">
      <div className="dialog">
        {props.dialogNames.map((el)=><DialogsItem name={el.name} id={el.id}/>)}
      </div>
      <div className="messages">
        {props.messageItems.map((el)=><Message message={el.message} id={el.id}/>)}
        <input onChange={onMessageChange} ref={messageText} placeholder="" type="text"/>
        <button onClick={addMessage}>ОТПРАВИТЬ</button>
      </div>
    </div>
  );
}

export default Dialogs;
