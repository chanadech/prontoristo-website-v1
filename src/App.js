import React from "react";

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
//import Home from "./components/Hero/index";
//import HomePage from "./Pages/HomePage/Home";
//import SearchBarPage from './components/SearchBar/index';

import Restaurant from "./components/Restaurant";
import Description from "./components/Description";
import Packages from "./components/Packages";
import GoogleMaps from "./components/GoogleMaps"
import Booking from "./components/Booking"
function App() {
  return (
    <Router>
      {/* <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/result" exact component={SearchBarPage}/>
      </switch>
      <Footer />
    </Router>
  );
} */}

      
       <GlobalStyle />
      <Restaurant />
      <Description />
      <Booking />
      <Packages />
      <GoogleMaps/> 
      <Footer/> 
      </Router>
      );
    }

export default App;
