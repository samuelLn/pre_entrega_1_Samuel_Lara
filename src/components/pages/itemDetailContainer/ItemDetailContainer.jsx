import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);


  const {addToCart, getTotalQuantityById} = useContext( CartContext )

  const initial = getTotalQuantityById(+id)

  //const navigate = useNavigate();

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };

    addToCart(infoProducto)
    console.log(infoProducto);
    //hooks para definir ruta ha hacia donde navegar
    //navigate("/cart");
  };

  return (
    <>
      {IsLoading ? (
        <h2>Cargando productos</h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};

export default ItemDetailContainer;
