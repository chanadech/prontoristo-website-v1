import React ,{useState}from "react";

//import Router
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Product";
import { productData, productDataTwo } from "./components/Product/data";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Promotion from "./components/Promotion";
import { Switch, Route } from "react-router-dom";
//test
// import About from "./About"
import Home from "./components/Hero/index";
import HomePage from "./Pages/HomePage/Home";
import SearchBarPage from './components/SearchBar/index';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
      </switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
