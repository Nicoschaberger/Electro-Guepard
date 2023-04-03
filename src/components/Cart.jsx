import React from 'react'
import CartContext from '../context/CartContext'
import Form from './Form'
import ItemCount from './ItemCount'



const Cart = () => {
  return (
    <>
    <CartContext>
      <ItemCount/>    
    </CartContext>
    <Form/>
    </>
  )
}

export default Cart