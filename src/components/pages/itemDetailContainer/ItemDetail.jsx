import ItemCountConteiner from "../../common/itemCount/ItemCountConteiner";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.img} alt={item.title} />
        <h1>Título: {item.title}</h1>
        <p>{item.description}</p>
        <h2>{item.price}</h2>
      </div>
      <ItemCountConteiner />
    </>
  );
};

export default ItemDetail;
