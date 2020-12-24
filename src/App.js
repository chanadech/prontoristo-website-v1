import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import SearchBarPage from './components/SearchBar/index';
import BookingPage from "./Pages/BookingPage/BookingPage"
function App() {
  return (
    <Router>
      <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/result" exact component={SearchBarPage}/>
        <Route path="/2" exact component={BookingPage}/>
=======
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
>>>>>>> 69545764686b55dd3ba837915565c92d833e74af
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
