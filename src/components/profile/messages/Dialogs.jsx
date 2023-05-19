import React from 'react'
import './messages.css'
import Message from './message/Message'
import DialogsItem from './dialogsItem/dialogsItem'
import {NavLink} from 'react-router-dom'

function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialog">
        <DialogsItem name={'Мария'} id={'1'}/>
        <DialogsItem name={'Инакентий'} id={'2'}/>
        <DialogsItem name={'Джон'} id={'3'}/>
        <DialogsItem name={'Георгий'} id={'4'}/>
        <DialogsItem name={'Татьяна'} id={'5'}/>
        <DialogsItem name={'Анастасия'} id={'6'}/>
      </div>
      <div className="messages">
        <Message message={':)'}/>
        <Message message={'Привет'}/>
        <Message message={'Го в театр'}/>
        <input placeholder="" type="text"/>
        <button>ОТПРАВИТЬ</button>
      </div>
    </div>
  );
}

export default Dialogs;