import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMenuContext } from "../../state";

// TODO: Split nav links to desktop and mobile

const links = ["home", "about", "contact"];

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

const NavLinks = () => {
  const { closeMenu } = useMenuContext();
  return (
    <NavLinksWrapper
      className="nav-links"
      variants={ulVariants}
      initial="closed"
      animate="open"
    >
      {links.map((link) => (
        <motion.li key={link} variants={liVariants}>
          <Link to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </Link>
        </motion.li>
      ))}
    </NavLinksWrapper>
  );
};

export default NavLinks;

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

  .link {
    position: relative;
    color: white;
    text-decoration: none;
    text-transform: capitalize;
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
