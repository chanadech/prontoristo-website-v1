import React ,{useState}from "react";

//import Router
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import SearchBarPage from './components/SearchBar/index';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import BookingPage from "./Pages/BookingPage/BookingPage"
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Router>
      <Navbar toggle = {toggle}/>
      <Sidebar isOpen ={isOpen} toggle = {toggle}/>
      <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/result" exact component={SearchBarPage}/>
        <Route path="/2" exact component={BookingPage}/>
      </switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
