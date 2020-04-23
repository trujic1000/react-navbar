import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMenuContext } from "../../state";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./DesktopNavLinks";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  return (
    <DesktopNav>
      <Link to="/" className="logo">
        Logo
      </Link>
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};

  height: 64px;
  padding: 0 60px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }

  .logo {
    flex: 2;
    color: ${(props) => props.theme.text};
    font-size: 32px;
  }

  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: ${(props) => props.theme.text} !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
