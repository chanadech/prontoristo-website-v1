import React from 'react';

//import Router
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero'

function App() {
  return (
    //create react router
    <Router>
      <GlobalStyle/>
      
     {/* create Navbar function*/}
     <Hero/>
    </Router>

  );
}

export default App;
