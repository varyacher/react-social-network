import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile name="Mask Elon"/>
    </div>
  );
}

export default App;
