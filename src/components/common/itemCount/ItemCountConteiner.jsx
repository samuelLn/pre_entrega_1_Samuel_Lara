import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountConteiner = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  //Agrerga producto
  const addOne = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Sin stock");
    }
  };

  // Quita productos
  const subOne = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // reseter cantidad en cero

  const reset = () => {
    setCount(0);
  };

  return (
    <ItemCount
      count={count}
      addOne={addOne}
      subOne={subOne}
      reset={reset}
      onAdd={onAdd}
    />
  );
};

export default ItemCountConteiner;
