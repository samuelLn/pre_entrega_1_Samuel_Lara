import ItemCountConteiner from "../../common/itemCount/ItemCountConteiner";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div>
        <img src={item.img} alt={item.title} />
        <h1>Título: {item.title}</h1>
        <p>{item.description}</p>
        <h2>{item.price}</h2>
      </div>
      {initial && <h3> ya tienes {initial} en el carrito </h3> }



      <ItemCountConteiner stock={item.stock} onAdd={onAdd} initial={initial} />
    </>
  );
};

export default ItemDetail;
