import { Grid, Container } from "@mui/material";

// exportar presentacional
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../../productsMock";

// AQUI VA LA LOGICA
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //promesa
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject("error")
    });

    //manipular promesa
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <ItemList items={items} />{" "}
        </Grid>
      </Container>
    </>
  );
};

export default ItemListContainer;
