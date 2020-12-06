import React from 'react';
import Navbar from './components/Navbar';

//import Router
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    //create react router
    <Router>
      
     {/* create Navbar function*/}
     <Navbar />

    </Router>

  );
}

export default App;
