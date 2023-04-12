import { createContext, useState } from 'react'

export const CartContext = createContext();

export const ShoppingCartProvider = ( {children} ) => {

  const [cart, setCart] = useState([]);

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const cartPriceTotal= ()=>{
    return cart.reduce((total, item) => total + (item.precio * item.counter), 0);
  }

  const cartPrice = ()=>{
    return cart.reduce((item) => (item.precio * item.counter));
  }

  const clearCart= ()=>{
    setCart([])
  }

  return (
    <CartContext.Provider value={{cart, setCart, removeFromCart, cartPriceTotal, clearCart, cartPrice}}>
      {children}
    </CartContext.Provider>
  );
};
