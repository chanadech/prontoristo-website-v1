import React from "react";
import {PackagesContainer,PackagesChoice} from './PackagesElements';

const Packages = () => {
  return (
    <PackagesContainer>
      <h1>Restaurant Packages</h1>
      <PackagesChoice>
      <p>Package A | Meat Lover Set | $19.99</p>
        <p>Package B | Veggie Set | $9.99</p>
        </PackagesChoice>
    </PackagesContainer>
  );
};

export default Packages;