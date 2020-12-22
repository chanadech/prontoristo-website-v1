import React from "react";
import Feature from "../../components/Features";
import Hero from "../../components/Hero";
import Products from "../../components/Product";
import Promotion from "../../components/Promotion";
import { GlobalStyle } from "../../globalStyles";
import { productData, productDataTwo } from "../../components/Product/data";
function Home() {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Products heading="CUISINES" data={productData} />
      <Feature />
      <Products heading="RECOMMENDATIONS FOR YOU" data={productDataTwo} />
      <Promotion />
    </div>
  );
  {
    /* create Navbar function*/
  }
}

export default Home;
