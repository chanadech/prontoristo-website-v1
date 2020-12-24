import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
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
      </switch>
      <Footer />
    </Router>
  );
}

export default App;
