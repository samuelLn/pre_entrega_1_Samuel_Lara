import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isLoading: true });

  const getData = async () => {
    // Nos aseguramos que el isLoading este en true
    setState({ ...state, isLoading: true });

    //Soliciatamos la data de api

    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);

    setState({ data: respData, isLoading: false });
  };

  useEffect(() => {
    getData();
  }, [url]);

  // obtemos la rspuesta de la api en el satate, y  cambiamoas el isloading a false para que mostremos la data
  return { data: state.data, isLoading: state.isLoading };
};
