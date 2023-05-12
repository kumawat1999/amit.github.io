import logo from './logo.svg';
import{
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './componet/Home'
import Contactus from './componet/Contactus';
import TopNav from './componet/TopNav';
import About from './componet/about';
import Experiences from './componet/Experiences'; 
import Projects from './componet/Projects';
export default function App(){
  return (
    <div>
        <Router>
        <TopNav></TopNav>
        <Switch>
          <Route path="/Contactus" element={<Contactus />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/about" element={<About></About>}>
          </Route>
          <Route path="/" element={<Home></Home>}>
          </Route>
          <Route path="/Experiences" element={<Experiences />}>
          </Route>
          <Route path="/Projects" element={<Projects />}>
          </Route>
        </Switch>

    </Router>
      </div>
  );
}

