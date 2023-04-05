import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { Button } from '@chakra-ui/react'

const CartWidget = ({quantity}) => {   

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