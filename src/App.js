import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Profile from './components/profile/Profile.jsx'
import Dialogs from './components/messages/Dialogs.jsx'
import Friends from './components/friends/Friends.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar friendsPage={props.state.friendsPage}/>  
        <Switch>
          <Route exact path='/' render={()=><Profile
           profilePage={props.state.profilePage}
           newPostText={props.state.profilePage.newPostText}
           // addPost={props.addPost}
           // onPostChange={props.onPostChange}
           dispatch={props.dispatch}
           />}/>
          <Route exact path='/profile' render={()=><Profile 
            profilePage={props.state.profilePage} 
            newPostText={props.state.profilePage.newPostText} 
            // addPost={props.addPost}
            // onPostChange={props.onPostChange}
            dispatch={props.dispatch}
            />}/>
          <Route exact path='/dialogs' render={()=><Dialogs 
            dialogNames={props.state.dialogPage.dialogNames} 
            messageItems={props.state.dialogPage.messageItems} 
            // addMessage={props.addMessage}
            // onMessageChange={props.onMessageChange}
            dispatch={props.dispatch}
            />}/>
          // <Route exact path='/friends' render={()=><Friends friendData={props.state.frendsPage}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
