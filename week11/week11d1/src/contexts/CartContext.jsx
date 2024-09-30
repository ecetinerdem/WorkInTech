import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const newCart = [...cart];
    const indexToRemove = newCart.findIndex((item) => item.id === id);
    newCart.splice(indexToRemove, 1);
    setCart(newCart);
    /*const filteredCart = cart.filter((c) => {
      c.id !== id;
    });
    setCart(filteredCart); */
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
