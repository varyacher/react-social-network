import React from 'react'
import './messages.css'
import Message from './message/Message'
import DialogsItem from './dialogsItem/dialogsItem'
import {NavLink} from 'react-router-dom'



function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialog">
        {props.dialogNames.map((el)=><DialogsItem name={el.name} id={el.id}/>)}
      </div>
      <div className="messages">
        {props.messageItems.map((el)=><Message message={el.message} id={el.id}/>)}
        <input placeholder="" type="text"/>
        <button>ОТПРАВИТЬ</button>
      </div>
    </div>
  );
}

export default Dialogs;