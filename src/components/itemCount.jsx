import { useContext } from 'react';
import {CounterContext} from '../context/CounterCart';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartProvider';

const ItemCount = () => {
  const [ cart, setCart ] = useContext(CartContext); 
  const {counter, increment, decrement, reset} = useContext(CounterContext);


  const addToCart = () => {
    setCart((currItems) => {
      const itemFound = currItems.find((item) => item.id === id);
      if(itemFound){
        return currItems.map((item) => {
          if (item.id === id){
            return {...item, quantity: item.quantity + counter};
          } else {
            return item;
          }
        });
      }
    });
  };


  return (
    <>
      <ButtonGroup>
        <div className="count">      
          <Button colorScheme='blue' className="im" onClick={() => increment()}> + </Button>
          <Button onClick = {() => addToCart()} colorScheme='blue' className='im'> Agregar al carrito: {counter}</Button>
          <Button colorScheme='blue' className="im" onClick={() => decrement()}> - </Button>        
          <Button colorScheme='blue' className="im" onClick={() => reset()}>Borrar</Button>
        </div>
    </ButtonGroup>
    </>
  );
};

export default ItemCount;
