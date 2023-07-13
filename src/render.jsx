// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker'
// import {addPost} from './data/state'
// import {addMessage} from './data/state'
// import {onPostChange} from './data/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './data/state';
import {addMessage} from './data/state';
import {onPostChange} from './data/state'


export let rerenderTree = (state)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} onPostChange={onPostChange}/>
    </React.StrictMode>, 
    document.getElementById('root')
  );
}
reportWebVitals();
// serviceWorker.unregister();