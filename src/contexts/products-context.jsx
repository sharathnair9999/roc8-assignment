import { useContext, useReducer } from "react";
import { createContext } from "react";
import { productsInitialState, productsReducer } from "./products-utils";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );
  const value = { productState, productDispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
