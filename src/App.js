import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Profile from './components/profile/Profile.jsx'
import Dialogs from './components/profile/messages/Dialogs.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Profile} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/dialogs' component={Dialogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
