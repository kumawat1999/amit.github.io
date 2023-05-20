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
import HtmlProgram from './componet/experiences/HtmlProgram';
import CssProgram from './componet/experiences/CssProgram';
import JavascriptProgram from './componet/experiences/JavascriptProgram';
import LaravelProgram from './componet/experiences/LaravelProgram';
import PhpProgram from './componet/experiences/PhpProgram';
import ReactProgram from './componet/experiences/ReactProgram';
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
          <Route path="/HtmlProgram" element={<HtmlProgram />}>
          </Route>
          <Route path="/CssProgram" element={<CssProgram />}>
          </Route>
          <Route path="/JavascriptProgram" element={<JavascriptProgram />}>
          </Route>
          <Route path="/LaravelProgram" element={<LaravelProgram />}>
          </Route>
          <Route path="/PhpProgram" element={<PhpProgram />}>
          </Route>
          <Route path="/ReactProgram" element={<ReactProgram />}>
          </Route>
        </Switch>

    </Router>
      </div>
  );
}

