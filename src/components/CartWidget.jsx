import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  const [ cart, setCart ] = useContext(CartContext); 

  const quantity = cart.reduce ((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
    <Button colorScheme='blue' className='carro'>      
      <span className="material-symbols-outlined"> shopping_cart</span>
      <span>{quantity}</span>      
    </Button>
    </>
  )
}

export default CartWidget