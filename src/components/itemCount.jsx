import { useContext } from 'react';
import { CounterContext } from '../context/CartContext';
import { Button, ButtonGroup } from '@chakra-ui/react'



const ItemCount = () => {

  const {counter, increment, decrement, reset} = useContext(CounterContext);

  return (
    <div className="count">      
        <Button colorScheme='blue' className="im" onClick={() => increment()}> + </Button>
        <Button className="im">{counter}</Button>
        <Button colorScheme='blue' className="im" onClick={() => decrement()}> - </Button>
        
        <Button colorScheme='blue' className="im" onClick={() => reset()}>Borrar</Button>
    </div>
  );
};

export default ItemCount;
