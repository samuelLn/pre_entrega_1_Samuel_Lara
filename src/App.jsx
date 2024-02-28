import "./App.css";
import Counter from "./components/common/Counter.jsx";
import ItemCountConteiner from "./components/common/itemCount/ItemCountConteiner.jsx";
// importar componetes nombrados
import { Navbar } from "./components/layout/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemLisConainerz/ItemListContainer.jsx";

const App = () => {
  // js script

  //let objetoDeEstilo ={}

  return (
    //jsx script
    <>
      {/*<h1  style={{color:"steelblue", fontSize:"2rem"}} > Titulo </h1>*/}
      {/*<Navbar/> /*Navabar*/}
      {/*<ItemListContainer/>*/} {/*Listado de productos*/}
      {/*<Counter/>*/}
      <ItemListContainer /> {/*Listado de productos*/}
      <ItemCountConteiner stock={3} />
    </>
  );
};

export default App;
