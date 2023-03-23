import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const CartWidget = () => {
  return (
    <>
    <p>
      <Link to={`/Cart`}> 
      <span className="material-symbols-outlined"> shopping_cart </span> 5 
      </Link>
    </p>
    <Cart/>
    </>
  )
}

export default CartWidget