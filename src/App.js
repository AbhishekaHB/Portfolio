import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navabar from "./components/Navabar/Navabar";
import Skil from './components/Skill/Skil';


function App() {
  return (
    <div className="App">
     <Navabar/>
    <Home/>
    <About/>
    <Skil/>
    <Contact/>
    
     
    </div>
  );
}

export default App;
