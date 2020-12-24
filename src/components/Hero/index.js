import React from "react";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

//check state in sidebar
const Hero = () => {

  
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1> pronto risto</HeroH1>
          <HeroP>SPECIAL MEAL WITH A SPECIAL PERSON</HeroP>
          <HeroBtn> BOOK NOW</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
