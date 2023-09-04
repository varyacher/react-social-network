import state from './data/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './data/state'



export let rerenderTree = (state)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  ReactDOM.render(
    <React.StrictMode> 
      <App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        // addPost={store.addPost.bind(store)} 
        addMessage={store.addMessage.bind(store)} 
        // onPostChange={store.onPostChange.bind(store)} 
        onMessageChange={store.onMessageChange.bind(store)}
      />
    </React.StrictMode>, 
    document.getElementById('root')
  );
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)


reportWebVitals();
