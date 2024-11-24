import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cupom, setCupom] = useState(null);
  const [desconto, setDesconto] = useState(0);
  const [pedidos, setPedidos] = useState([]);

  const addItem = (item) => {
    const newItem = { ...item, cartItemId: uuidv4() };
    setCartItems((prev) => [...prev, newItem]);
  };

  const removeItem = (cartItemId) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const aplicarCupom = (codigoCupom) => {
    if (codigoCupom === 'serratec10') {
      setDesconto(10);
      setCupom(codigoCupom);
    } else {
      setDesconto(0);
    }
  };

  const finalizarCompra = (metodoPagamento) => {
    setPedidos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        items: cartItems,
        cupom,
        desconto,
        total: cartItems.reduce((acc, item) => acc + item.price, 0) - desconto,
        metodoPagamento,
      },
    ]);
    setCartItems([]);
    setCupom(null);
    setDesconto(0);
  };

  const totalSemDesconto = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = totalSemDesconto - desconto;

  return (
    <CartContext.Provider value={{ pedidos, cartItems, addItem, removeItem, finalizarCompra, aplicarCupom, total, desconto, cupom }}>
      {children}
    </CartContext.Provider>
  );
};
