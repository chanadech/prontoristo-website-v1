import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useCombobox } from "downshift";
import { Input } from "antd";
import {
  SearchBarContainer,
  SearchBarContent,
  SearchBarItems,
  SearchBarBtn,
} from "./SearchBarElements";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data))
  }, []);



  const {
    isSearchOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChanges: ({ inputValue }) => {
      setInputItems(
        users.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
          )
      )
    },
  });
  console.log(users);

  

  
  return (
    <SearchBarContainer>
      <SearchBarContent>
        <SearchBarItems>
          <div>Search Box</div>
          <h2> Current User : {singleUser} </h2>
          <div {...getComboboxProps()}>
            <Input
              {...getInputProps()}
                placeholder="Search"
                enterButton = "Search"
                size ="large"
            />
          </div>

          <ul {...getMenuProps()}>
            {isSearchOpen && inputItems.map((item,index) => (
                <span
                  key={item.id}
                  {...getItemProps({item,index})}
                  onClick={() => setSingleUser(item.name)} >
                  <li style={highlightedIndex === index ? { background: "#ede" } : {}} > 
                  <h4>{item.name}</h4> 
                  </li>
                  <h1>{item.name}</h1>
                </span>
              ))}
          </ul>

          
          <h4>Hello</h4>

        </SearchBarItems>
      </SearchBarContent>
    </SearchBarContainer>
  );
};

export default SearchBar;
