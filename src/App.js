import React ,{useState}from "react";

//import Router
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import SearchBarPage from './components/SearchBar/index';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PersonalInfoPage from "./Pages/PersonalInfoPage/PersonalInfoPage"
import BookingPage from "./Pages/BookingPage/BookingPage"
import SearchBarTest from "./components/SearchBarData";
import About from "./components/About"

import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import { GlobalStyle } from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Router>
      <GlobalStyle/>
      <Navbar toggle = {toggle}/>
      <Sidebar isOpen ={isOpen} toggle = {toggle}/>
      <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/result" exact component={SearchBarPage}/>
        <Route path="/2" exact component={BookingPage}/>
        <Route path="/3" exact component={PersonalInfoPage}/>
        <Route path = "/test" exact component = {SearchBarTest}/>
        <Route path = "/About" exact component = {About}/>
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        
      </switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
