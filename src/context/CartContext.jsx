import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvaider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //const eliminar = () => {};
  //const limpiar = () => {};
  //const agregar = () => {};

  const addToCart = (product) => {
    let existe = isInCart(product.id);

    //condicional para consultar la exixtencia de un producto en el carrito
    if (existe) {
      //alert("ya existe")
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      //console.log(product);
      //Aqui agregamos los productos al carrito
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
    console.log("Limpiar Carrito");
  };

  const removeById = (id) => {
    console.log(id);
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  // funcion que consulta la id del producto con metodo some
  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  // funcion suma el total de los elementos del carrito
  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };


 const getTotalPrice =() => {

let totalPrice = cart.reduce((acc, elemento)=>{

  return acc + (elemento.quantity * elemento.price) 

}, 0)

return totalPrice

 }


const getTotalQuantityById = (id) =>{

  let product = cart.find((elemento)=> elemento.id === id)

   if(product){
      
    return product.quantity
   } else {
    return product
   }


  
}



  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvaider;
