import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountConteiner = ({ stock }) => {
  const [count, setCount] = useState(1);

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

  return <ItemCount count={count} addOne={addOne} subOne={subOne} />;
};

export default ItemCountConteiner;
