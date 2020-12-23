import React from "react";
import {PackagesContainer,PackagesButton} from './PackagesElements'

const Packages = () => {
  return (
    <PackagesContainer>
      <h1>Packages</h1>
      <PackagesButton>Promotion Set A: Meat Lover Set, $15.99</PackagesButton>
      <PackagesButton>Promotion Set B: Veggie Set, $9.99</PackagesButton>
    </PackagesContainer>
  );
};

export default Packages;