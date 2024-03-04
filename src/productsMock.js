export let products = [
  {
    id: "1",
    title: "Pizza Margarita 1",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Vegetariana",
  },
  {
    id: "2",
    title: "Pizza Margarita 2",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Primavera",
  },
  {
    id: "3",
    title: "Pizza Margarita 3",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Carnes",
  },
  {
    id: "4",
    title: "Pizza Margarita 4",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Carnes",
  },
  {
    id: "5",
    title: "Pizza Margarita 5",
    price: 4500,
    description: "Ingredientes de la mejo calidad",
    img: "https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png",
    stock: 10,
    category: "Quesos",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};

// trae un solo prodcuto
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto ${id}`);
        }
      }, 1000);
    } else {
      reject("No hay producto");
    }
  });
};
