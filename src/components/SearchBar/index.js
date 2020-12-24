import React,{useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  SearchBarContainer,
  SearchBarContent,
  SearchBarItems,
  SearchBarBtn,
} from "./SearchBarElements";


const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)}
      
  return (
    <SearchBarContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SearchBarContent>
        <SearchBarItems>
          <div classname="ui segment">Search Box</div>
        </SearchBarItems>
      </SearchBarContent>
    </SearchBarContainer>
  );
};

export default SearchBar;
