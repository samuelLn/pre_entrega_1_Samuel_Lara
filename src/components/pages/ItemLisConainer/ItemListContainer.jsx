import { Grid, Container } from "@mui/material";

// exportar presentacional
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts, products } from "../../../productsMock";
import { useParams } from "react-router-dom";

// AQUI VA LA LOGICA
const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    //promesa
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject("error")
    });

    //manipular promesa
    tarea;
    getProducts() // Funsion que retrasa 2 segundos la carga de los productos
      .then((res) => {
        setItems(res);
        setIsLoading(false);
        console.log(res);

        if (category) {
          const productsFilter = res.filter(
            (product) => product.category === category
          );
          setItems(productsFilter);
        } else {
          setItems(res);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {isLoading ? (
            <h2>Cargando productos...</h2>
          ) : (
            <ItemList items={items} />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ItemListContainer;
