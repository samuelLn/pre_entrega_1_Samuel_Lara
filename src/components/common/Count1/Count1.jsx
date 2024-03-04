import { useState } from "react";
import { useCount } from "../../../hooks/useCount";

export const Count1 = () => {
  // logica
  const { countx, incrementx, decremetx, resetx } = useCount(20);

  return (
    <div>
      <h3>Count 1</h3>
      <p>{countx}</p>
      <button onClick={incrementx}>+</button>
      <button onClick={resetx}>Reset</button>
      <button onClick={decremetx}>-</button>
    </div>
  );
};

export default Count1;
