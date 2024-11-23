import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const newItem = { ...item, cartItemId: uuidv4() };
    setCartItems((prev) => [...prev, newItem]);
  };

  const removeItem = (cartItemId) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};
