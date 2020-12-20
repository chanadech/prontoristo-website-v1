import React , {useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
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
  const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
  setIsOpen(!isOpen)
}
  
  return (
    <HeroContainer>
      <Navbar toggle = {toggle}/>
      <Sidebar isOpen ={isOpen} toggle = {toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1> Greatest Restaurant</HeroH1>
          <HeroP>Ready for Booking?</HeroP>
          <HeroBtn> Click Here</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
