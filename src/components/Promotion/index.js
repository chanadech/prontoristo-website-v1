import React from "react";
import {Link} from "react-router-dom";
import {FeatureContainer2,FeatureButton, ImagePromotion} from './PromotionElements';

const Promotion = () => {
  return (
    <FeatureContainer2>
      <ImagePromotion />
      <p>
      <h1>PROMOTION OF THE MONTH</h1>
      <br/>
      <div>GET UP TO 50 % DISCOUNT FOR BOOKING WITH US WITHIN
        <br/> OCTOBER 2020
      </div>
      <div style={{color:"#E65C5C",marginLeft:'5%'}} ><center>(Only at jointed - promotional restaurant)</center></div>
      <Link to="/2"><FeatureButton> Book Now</FeatureButton></Link>
      </p>
    </FeatureContainer2>
  );
};

export default Promotion;