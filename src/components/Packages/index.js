import React from "react";
import {PackagesContainer,PackagesButton} from './PackagesElements'

const Packages = () => {
  return (
    <PackagesContainer>
      <h1>Packages</h1>
      <p>Package A: Restaurant Name, Detail</p>
      <PackagesButton> package a </PackagesButton>
      <p>Package B: Restaurant Name, Detail</p>
      <PackagesButton> package b</PackagesButton>
    </PackagesContainer>
  );
};

export default Packages;