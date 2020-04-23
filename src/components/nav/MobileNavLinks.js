import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMenuContext } from "../../state";
import { useTheme } from "../../hooks";
import { links, NavLink } from "./DesktopNavLinks";
import Icon from "../Icon";

const ulVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1, // 1 forwards, -1 backwards
      when: "beforeChildren", // "afterChildren"
    },
  },
  closed: {
    opacity: 0,
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: { y: -20, opacity: 0 },
};

const MobileNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const [theme, toggleTheme] = useTheme();
  return (
    <NavLinksWrapper
      className="nav-links"
      variants={ulVariants}
      initial="closed"
      animate="open"
    >
      {links.map((link) => (
        <motion.li key={link} variants={liVariants}>
          <NavLink to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </motion.li>
      ))}
      <motion.li
        variants={liVariants}
        initial="closed"
        animate="open"
        transition={{ delay: 1.4 }}
      >
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </motion.li>
    </NavLinksWrapper>
  );
};

export default MobileNavLinks;

const NavLinksWrapper = styled(motion.ul)`
  display: flex;
  justify-content: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }

  li {
    &:not(:last-child) {
      margin-right: 26px;
    }
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
