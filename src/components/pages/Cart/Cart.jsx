import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { products } from "../../../productsMock";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiarAlerta = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si eliminar",
      denyButtonText: `No, volver al carrito`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminados!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se mantienen los productos", "", "info");
      }
    });
  };

  return (
    <>
      <h1>Pagina carrito</h1>
      {cart.map((products) => (
        <div key={products.id}>
          <h2>Producto:{products.title} </h2>
          <h2>Cantidad:{products.quantity}</h2>
          <button onClick={() => removeById(products.id)}>Eliminar</button>
        </div>
      ))}

      <h2>El total de la compara es {total}</h2>

      <button onClick={limpiarAlerta}>Limpiar Carrito</button>

      <Link to="/checkout">
        <Button variant="contained">Ir a Finalizar Compra</Button>
      </Link>
    </>
  );
};
