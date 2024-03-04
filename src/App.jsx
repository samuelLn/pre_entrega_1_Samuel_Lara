import "./App.css";
// importar componetes nombrados
import { Navbar } from "./components/layout/Navbar/Navbar.jsx";

import FooterContainer from "./components/layout/Footer/FooterContainer.jsx";
//import ItemCountConteiner from "./components/common/itemCount/ItemCountConteiner.jsx";
//import {  } from "./components/pages/";
import { Count2, Count1, UseFetch, Cart } from "./components/common";
import ItemListContainer from "./components/pages/ItemLisConainer/ItemListContainer.jsx";
import HomeContainer from "./components/pages/Home/HomeContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/pages/ItemLisConainer/ItemList.jsx";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer.jsx";

//import UseFetch from "./components/common/UseFetch/UseFetch.jsx";

const App = () => {
  // js script

  //let objetoDeEstilo ={}

  return (
    //jsx script
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
         
         
        </Routes>

        <FooterContainer />
      </BrowserRouter>
    </>
  );
};

export default App;

//{/*<h1  style={{color:"steelblue", fontSize:"2rem"}} > Titulo </h1> <Count1 /> <Count2 /> <UseFetch/> <ItemCountConteiner stock={3} /> <HomeContainer />*/}
