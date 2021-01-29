import './App.css';
import Navbar from './components/NavbarContainer/Navbar';
import ParentContainer from './components/ParentContainer/ParentContainer';
import SideNav from './components/SideNavContainer/SideNav';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Upload from './Pages/Upload';
import {BrowserRouter as Router,Route,Switch} from  'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Home /> */}
        <Upload />
        {/* <Profile/> */}
      </div>
    </Router>
  );
}

export default App;
