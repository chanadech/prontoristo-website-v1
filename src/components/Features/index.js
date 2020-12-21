import React from "react";
import {FeatureContainer,FeatureButton} from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Deal of the Day</h1>
      <p>get a special price only this day!</p>
      <FeatureButton> Book Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;