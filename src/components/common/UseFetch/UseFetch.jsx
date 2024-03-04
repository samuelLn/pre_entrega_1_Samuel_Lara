import { useFetch, useCount } from "../../../hooks/";

export const UseFetch = () => {
  //const page = 2;
  const { countx, incrementx, decremetx } = useCount(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${countx}`
  );

  return (
    <>
      <h3>Personajes</h3>
      <div>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          data.results.map(({ id, name, gender, image }) => (
            <div key={id}>
              <p>Nombre: {name}</p>
              <p>Género: {gender}</p>
              <img src={image} alt={name} />
            </div>
          ))
        )}
      </div>

      <div>
        {/* condiocionala rendirng */}
        {/* countx > 1 && <button onClick={decremetx}>Atras</button> */}
        {countx > 1 ? (
          <button onClick={decremetx}>Atras</button>
        ) : (
          <button onClick={decremetx} disabled>
            Atras
          </button>
        )}
        <strong>Pagina {countx}</strong>
        <button onClick={incrementx}>Siguiente</button>
      </div>
    </>
  );
};
