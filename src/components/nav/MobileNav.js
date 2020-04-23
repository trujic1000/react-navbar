import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuContext } from "../../state";
import { useScrollFreeze } from "../../hooks";
import NavLinks from "./MobileNavLinks";

const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <MobileNav
          isOpen={isMenuOpen}
          initial={{ x: "-105%" }}
          animate={{ x: 0 }}
          exit={{ x: "-105%" }}
          transition={{ damping: 200 }}
        >
          <NavLinks />
        </MobileNav>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;

const MobileNav = styled(motion.nav)`
  position: absolute;
  top: 62px;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
