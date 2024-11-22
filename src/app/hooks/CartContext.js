import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
        setTotal(total + item.price);
    };

    const removeItem = (id) => {
        const filteredItems = cartItems.filter(item => item.id !== id);
        const itemToRemove = cartItems.find(item => item.id === id);
        setCartItems(filteredItems);
        setTotal(total - (itemToRemove ? itemToRemove.price : 0));
    };

    return (
        <CartContext.Provider value={{ cartItems, total, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
