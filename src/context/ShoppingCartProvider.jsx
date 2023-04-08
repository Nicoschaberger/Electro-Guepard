import { createContext, useState } from 'react'
import ItemDatail from '../components/ItemDatail';
import ItemCount from '../components/ItemCount';

export const CartContext = createContext();

export const ShoppingCartProvider = ( {children} ) => {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};
