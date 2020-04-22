import { useLayoutEffect } from "react";

export const useScrollFreeze = (isMenuOpen) => {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);
};
