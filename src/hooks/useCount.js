import { useState } from "react";

export const useCount = (initial = 0) => {
  const [countx, setCountx] = useState(initial);

  const incrementx = () => {
    setCountx(countx + 1);
  };
  const decremetx = () => {
    if (countx > 0) {
      setCountx(countx - 1);
    }
  };
  const resetx = () => {
    setCountx(initial);
  };

  return {
    countx,
    incrementx,
    decremetx,
    resetx,
  };
};
