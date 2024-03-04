import { useState, useEffect } from "react";
import FetchingData from "./FetchingData";

const FetchingDataContainer = () => {
  //le urlApi = "";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getData = fetch("https://jsonplaceholder.typicode.com/users");
    console.log(getData);

    getData
      .then((data) => data.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  const addUser = () => {
    let obj = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    let tarea = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        Authotization: "Barer sfdeifjpoekfpskfokfpoek",
      },
    });

    tarea.then((res) => console.log(res)).catch((error) => console.log(error));
  };

  return (
    <div>
      <FetchingData addUser={addUser} />
    </div>
  );
};

export default FetchingDataContainer;

// Muestra consusmo api extarna metodo get post y get
