import React, { createContext, useContext } from "react";
import { useToggle } from "../hooks";

const initialState = {
  isMenuOpen: false,
  toggle: () => {},
};

export const MenuContext = createContext(initialState);

export const MenuProvider = ({ children }) => {
  const { isToggled, setToggle, toggle } = useToggle(false);
  const closeMenu = () => setToggle(false);
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
