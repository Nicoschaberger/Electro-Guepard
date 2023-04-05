import { createContext, useState } from 'react'

export const CartContext = createContext();

const ShoppingCartProvider = ( {children} ) => {

  const [cart, setCart] = useState([]);

  const quantity = cart.reduce ((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;