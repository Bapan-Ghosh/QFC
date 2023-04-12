import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
       <div className="App">
          <Router>
           <Navbar/>
           <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/Menu" exact element={<Menu/>} />
              <Route path="/About" exact element={<About/>} />
              <Route path="/Contact" exact element={<Contact/>} />
           </Routes>
           <Footer/>
          </Router>
       </div> 
  );
}

export default App;
