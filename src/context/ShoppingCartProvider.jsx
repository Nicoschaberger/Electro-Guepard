import { createContext, useState } from 'react'

export const CartContext = createContext();

const ShoppingCartProvider = ( {children} ) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const itemCantidad = {...item, cantidad};
    if (!isInCart(item.id)) {
      setCart({...cart, itemCantidad});
    } else {
      const newProducts = cart.map(prod => {
        if(prod.id === item.id) {
          const newProduct = {
            ...prod, cantidad: prod.cantidad + cantidad
          }
          return newProduct
        } else {
          return prod
        }
      })
      setCart(newProducts);
    }
  };

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  }

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