import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";

const DesktopNavbar = ({ isOpen, setOpen }) => {
  return (
    <DesktopNav>
      <div className="logo">Logo</div>
      <NavLinks />
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </DesktopNav>
  );
};

DesktopNavbar.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.primary};
  color: white;

  height: 10vh;
  padding: 0 60px;

  .logo {
    font-size: 5vh;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    width: 35vw;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }

    li {
      &:not(:last-child) {
        margin-right: 26px;
      }
    }
  }

  .link {
    position: relative;
    color: white;
    text-decoration: none;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      width: 0;
      background: white;
      transition: width 150ms linear;
    }
    &:hover::before {
      width: 100%;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
