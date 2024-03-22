import "./App.css";
// importar componetes nombrados

//import ItemCountConteiner from "./components/common/itemCount/ItemCountConteiner.jsx";
//import {  } from "./components/pages/";
import { Count2, Count1, UseFetch, Cart } from "./components/common";
import ItemListContainer from "./components/pages/ItemLisConainer/ItemListContainer.jsx";

//libreria que ejecuta las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import NofoundContainer from "./components/pages/NoFound/NofoundContainer.jsx";
import Checkout from "./components/pages/Checkout/Checkout.jsx";
import CartContainer from "./components/pages/Cart/CartContainer.jsx";
import CheckoutContainer from "./components/pages/Checkout/CheckoutContainer.jsx";
import CartContextProvaider from "./context/CartContext.jsx";
import FetchingAxios from "./components/pages/fetchingAxios/FetchingAxios.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";


//import UseFetch from "./components/common/UseFetch/UseFetch.jsx";

const App = () => {
  // js script

  //let objetoDeEstilo ={}

  return (
    //jsx script
    <>
      <BrowserRouter>
     <CartContextProvaider>

       <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/Cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NofoundContainer />} />
            <Route path="/fetchingAxios" element={<FetchingAxios />} />
            
          </Route>
         

          <Route element={<ProtectedRoute/>}>
        <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard/>} />    
         </Route>
         </Route>
         
         
          


        </Routes>
        
        </CartContextProvaider>


      </BrowserRouter>
    </>
  );
};

export default App;

//{/*<h1  style={{color:"steelblue", fontSize:"2rem"}} > Titulo </h1> <Count1 /> <Count2 /> <UseFetch/> <ItemCountConteiner stock={3} /> <HomeContainer />*/}
