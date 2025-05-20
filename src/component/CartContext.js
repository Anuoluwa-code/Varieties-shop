

'use client';

import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [color, setColor] = useState('bg-green-700')

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    toast.success(`${product.title} Successfully added to cart!`);
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
    toast.success(`${product.title} Successfully added to favorites!`);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevItems) => prevItems.filter(product => product.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      let rawPrice = item.price;
  
      
      if (typeof rawPrice === "string") {
        rawPrice = rawPrice.replace(/[^\d.]/g, "");
      }
  
      const price = parseFloat(rawPrice);
  
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };
  
  

  return (
    <CartContext.Provider value={{ color, setColor, cartItems, favorites, setFavorites, addToCart, addToFavorites, removeFromCart, removeFromFavorites, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;