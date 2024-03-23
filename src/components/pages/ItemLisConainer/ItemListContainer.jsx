import { Grid, Container } from "@mui/material";
// exportar presentacional
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
//import { getProducts, products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { ddbb } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

// AQUI VA LA LOGICA
const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /*setIsLoading(true);
    let productsColletion = collection(ddbb, "products");
    getDocs(productsColletion)
      .then((res) => {
        let arrayOptimo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        //console.log (arrayOptimo)
        setItems(arrayOptimo);
      })
      .finally(() => setIsLoading(false));*/

      let productsColletion = collection(ddbb, "products");
      

      let consulta = productsColletion;

      if(category){
      let prodcutColletionFiltered = query(productsColletion, where( "category", "==" , category ) );
       consulta = prodcutColletionFiltered;
     }


      getDocs(consulta)
      .then((res) => {
        let arrayOptimo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        //console.log (arrayOptimo)
        setItems(arrayOptimo);
      })
      .finally(() => setIsLoading(false));



  }, [category]);

  /*if(isLoading){
    return <h1>Cargando..</h1>
  }*/

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {isLoading ? (
            <HashLoader color="#36d7b7" />
          ) : (
            <ItemList items={items} />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ItemListContainer;
