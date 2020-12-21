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
          <HeroH1> pronto risto</HeroH1>
          <HeroP>SPECIAL MEAL WITH A SPECIAL PERSON</HeroP>
          <HeroBtn> BOOK NOW</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
