import { useEffect, useReducer, useState } from "react";
import { axiosInstance } from "../../../api/axiosinstance";

const FetchingAxios = () => {
  const [User, setUser] = useState([]);

  useEffect(() => {
    const getUsers = axiosInstance.get("/users");
    getUsers
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const createUser = () => {
    let user = {
      name: "pep",
      edad: 22,
    };

    axiosInstance.post("/users", user);
  };

  return <div>FetchingAxios</div>;
};

export default FetchingAxios;
