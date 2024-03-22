import { useState } from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  //const [name, setName] = useState("");
  //const [lastName, setLastName] = useState("");

  const [userInfo, setuserInfo] = useState({
    name: "",
    lastName: "",
  });

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("Se envió el formulario");
    console.log(userInfo);
  };

  //const getNameForm = (event) => {
  //console.log(event.target.value)
  //setName(event.target.value)
  // setuserInfo({...userInfo, name: event.target.value})
  //}

  //const getLastNameForm = (event) => {
  //console.log(event.target.value)
  //setLastName(event.target.value)
  //setuserInfo({...userInfo, lastName: event.target.value})
  //}

  // funcion para manejar todo los eventos
  const capturar = (event) => {
    console.log(event.target.value);
    setuserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};

export default CheckoutContainer;
