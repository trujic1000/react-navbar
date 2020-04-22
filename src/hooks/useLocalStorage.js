import { useState, useEffect } from "react";

export const useLocalStorage = (key, initial) => {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState(item || initial);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};
