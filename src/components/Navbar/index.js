//Key ลัด สร้าง index refce

import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">ProntoRisto555</NavLink>
        <NavLink to ="/"> Tokyoza</NavLink>

        <NavIcon>
          <p>Menu</p>
        <Bars/>
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
