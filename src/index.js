import state from './data/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './data/state';
import {addMessage} from './data/state';
import {onPostChange} from './data/state'
import {onMessageChange} from './data/state'
import {subscribe} from './data/state'



export let rerenderTree = (state)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} onPostChange={onPostChange} onMessageChange={onMessageChange}/>
    </React.StrictMode>, 
    document.getElementById('root')
  );
}

rerenderTree(state)
subscribe(rerenderTree)

reportWebVitals();
