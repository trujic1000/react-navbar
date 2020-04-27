import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useMenuContext } from "../../state";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/" className="logo">
        Logo
      </Link>
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  background: var(--bg);
  color: var(--text);

  ${(props) =>
    props.isScrolled &&
    css`
      background: var(--headerBg);
      box-shadow: var(--headerBoxShadow);
    `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }

  .logo {
    flex: 2;
    color: var(--text);
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
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
