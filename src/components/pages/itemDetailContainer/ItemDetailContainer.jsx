import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);

  return <>{IsLoading ? <h2>Cargando productos</h2> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
