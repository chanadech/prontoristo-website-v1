//Key ลัด สร้าง index refce

import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
      <Nav>
        <NavLink to="/">ProntoRisto</NavLink>
        <NavLink to="/"> | Restaurant</NavLink>
        <NavLink to="/services"> | About us</NavLink>
        <NavLink to="/contact"> | Contact</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
        </NavIcon>
        <NavIcon>
          <NavLink to="/result"><Bars /></NavLink>
        </NavIcon>
      </Nav>
  );
};

export default Navbar;
