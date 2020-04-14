import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import NavLinks from "./NavLinks";

const MobileNavbar = ({ isOpen, setOpen }) => {
  return (
    <MobileNav isOpen={isOpen}>
      <NavLinks setOpen={setOpen} />
    </MobileNav>
  );
};

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: absolute;
  top: 10vh;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 150ms ease;
  opacity: 0;
  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      z-index: 98;
    `}

  .nav-links {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      padding: 12px;
    }
  }

  .link {
    position: relative;
    color: white;
    font-size: 24px;
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
`;
