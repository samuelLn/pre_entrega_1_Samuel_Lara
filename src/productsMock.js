export let products = [
  {
    id: 1,
    title: "Pizza Margarita 1",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Vegetariana",
  },
  {
    id: 2,
    title: "Pizza Margarita 2",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Primavera 3",
  },
  {
    id: 3,
    title: "Pizza Margarita 3",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Carnes",
  },
  {
    id: 4,
    title: "Pizza Margarita 4",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Todas",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    
    if(products.length > 0){ setTimeout(()=>{resolve(products)}, 2000)} else { reject("No hay productos")}
  });
};
