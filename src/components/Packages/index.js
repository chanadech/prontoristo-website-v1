import React from "react";
import {PackagesContainer,PackagesChoice} from './PackagesElements'

const Packages = () => {
  return (
    <PackagesContainer>
      <h1>Restaurant Packages</h1>
      <PackagesChoice>
        <p>Promotion Set A &emsp; Meat Lover Set &emsp; $15.99</p>
        <p>Promotion Set B &emsp; Veggie Set &emsp; $9.99</p>
        </PackagesChoice>
    </PackagesContainer>
  );
};

export default Packages;