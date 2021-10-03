import { useState, useLayoutEffect } from "react";

export const useMedia = () => {
  const [isMobile, setMobile] = useState(false);

  const onResize = () => {
    const isMobile = window.innerWidth < 768;
    setMobile(isMobile);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { isMobile };
};
