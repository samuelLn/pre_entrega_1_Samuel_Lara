//expórta tarejetas presentacional

import { ProductCard } from "../../common/ProductCard";

export const ItemList = ({ items }) => {
  //console.log(items);

  return (
    <>
      {items.map(({ id, img, title, description, price }) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
            id={id} // Id para el boton detalle
          />
        );
      })}
    </>
  );
};

export default ItemList;
