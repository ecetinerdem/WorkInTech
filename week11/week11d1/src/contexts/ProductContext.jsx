import { createContext, useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { data } from '../data';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { addITem } = useContext(CartContext);

  return (
    <ProductContext.Provider value={{ products: data, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
