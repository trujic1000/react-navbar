import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMenuContext } from "../../state";
import { useTheme } from "../../hooks";
import Icon from "../Icon";

export const links = ["home", "about", "contact"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const [theme, toggleTheme] = useTheme();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <NavLink to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
      <li>
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li>
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  li:not(:last-child) {
    margin-right: 26px;
  }

  li:last-child {
    margin-left: auto;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
