import React from "react";

//import Router
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Product";
import { productData, productDataTwo } from "./components/Product/data";
import Feature from "./components/Features";
import Footer from "./components/Footer";
function App() {
  return (
    //create react router
    <Router>
      <GlobalStyle />

      {/* create Navbar function*/}
      <Hero />
      <Products heading="CUISINES" data={productData} />
      <Feature />
      <Products heading="RECOMMENDATIONS FOR YOU" data={productDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
