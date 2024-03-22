import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { products } from "../../../productsMock";

export const Cart = () => {
  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);

  let total =  getTotalPrice()

  return (
    <>
      <h1>Pagina carrito</h1>
      {cart.map((products) => (
        <div key={products.id}>
          <h2>Producto:{products.title} </h2>
          <h2>Cantidad:{products.quantity}</h2>
          <button onClick={() => removeById(products.id) } >Eliminar</button>
        </div>
      ))}

      <h2>El total de la compara es {total}</h2>

      <button onClick={clearCart} >Limpiar Carrito</button>

      <Link to="/checkout">
        <Button variant="contained">Ir a Finalizar Compra</Button>
      </Link>
    </>
  );
};
