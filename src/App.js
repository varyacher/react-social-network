import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Profile from './components/profile/Profile.jsx'
import Dialogs from './components/messages/Dialogs.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />  
        <Switch>
          <Route exact path='/' render={()=><Profile postsData={props.state.profilePage}/>} />
          <Route exact path='/profile' render={()=><Profile postsData={props.state.profilePage}/>} />
          <Route exact path='/dialogs' render={()=><Dialogs dialogNames={props.state.dialogPage.dialogNames} messageItems={props.state.dialogPage.messageItems}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
