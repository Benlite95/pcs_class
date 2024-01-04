import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValues) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValues;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [
    state,
    setState
  ];
}
