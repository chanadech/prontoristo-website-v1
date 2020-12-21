import React from "react";
import {FeatureContainer,FeatureButton} from './PromotionElements';

const Promotion = () => {
  return (
    <FeatureContainer>
      <h1>PROMOTION OF THE MONTH</h1>
      <p>
      <div>GET UP TO 50 % DISCOUNT FOR BOOKING WITH US</div>
      <div>WITHIN OCTOBER 2020</div>
      <div>(Only at jointed - promotional restaurant)</div>
      <FeatureButton> Book Now</FeatureButton>
      </p>
    </FeatureContainer>
  );
};

export default Promotion;