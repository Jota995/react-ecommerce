import { createContext, useState } from "react";

export const Context = createContext();

export const ProductsCartContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  const agregarAlCarrito = (product) => {
    if (productsCart.find((x) => x.Id == product.Id)) {
      const newProductsCart = productsCart.map((x) =>
        x.Id === product.Id ? { ...x, Quantity: x.Quantity + 1 } : x
      );
      return setProductsCart(newProductsCart);
    }

    product.Quantity = 1;

    return setProductsCart([...productsCart, product]);
  };

  const deleteProduct = (id) => {
    const newProductsCart = productsCart.filter((x) => x.Id !== id);
    return setProductsCart(newProductsCart);
  };

  const sumProductCart = (id) => {
    if (productsCart.find((x) => x.Id == id)) {
      const newProductsCart = productsCart.map((x) =>
        x.Id === id ? { ...x, Quantity: x.Quantity + 1 } : x
      );
      return setProductsCart(newProductsCart);
    }
  };

  const restProductCart = (id) => {
    const product = productsCart.find((x) => x.Id == id);

    if (!product || product.Quantity === 1) {
      return;
    }

    const newProductsCart = productsCart.map((x) =>
      x.Id === id ? { ...x, Quantity: x.Quantity - 1 } : x
    );

    return setProductsCart(newProductsCart);
  };

  return (
    <Context.Provider
      value={{
        productsCart,
        agregarAlCarrito,
        deleteProduct,
        sumProductCart,
        restProductCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
