import React from "react";

//import Router
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Product";
import { productData } from "./components/Product/data";
import Feature from "./components/Features";
function App() {
  return (
    //create react router
    <Router>
      <GlobalStyle />

      {/* create Navbar function*/}
      <Hero />
      <Products heading="Choose your restaurant" data={productData} />
        <Feature />
    </Router>
  );
}

export default App;
