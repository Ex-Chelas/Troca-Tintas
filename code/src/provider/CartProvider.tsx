import React, { useState, useEffect } from 'react';
import { CartContext, CartItem } from '../contexts/cardContext';


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log('CartProvider mounted'); // Should log once on mount
  }, []);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      console.log('Updated cart items in addToCart:', updatedItems);
      return updatedItems;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    console.log('Cart items updated in CartProvider:', cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

