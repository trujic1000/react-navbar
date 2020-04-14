import React, { useState } from "react";
import styled from "styled-components";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Nav>
      <DesktopNavbar isOpen={isOpen} setOpen={setOpen} />
      <MobileNavbar isOpen={isOpen} setOpen={setOpen} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
