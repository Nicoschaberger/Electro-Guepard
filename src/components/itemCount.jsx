import { Card, CardHeader, Text, Heading, ButtonGroup, Divider, CardBody, CardFooter, Button, Stack, Image } from '@chakra-ui/react'
import { useState } from 'react'

const ItemCount = ({addToCart}) => {

  const [counter, setCounter ]= useState(0);

  const increment = () => { 
    setCounter(counter + 1);
  };
  
  const decrement = () => {
    setCounter(counter - 1 );
  };

  const reset = () => {
    setCounter(0);
  };
  
 
  
  return (
    <> 
          
          <ButtonGroup className='compra' spacing='2'>
                <Button colorScheme='blue' className="im" onClick={increment}> + </Button>
                <Button onClick = {() => addToCart()} colorScheme='blue' className='im'>{counter}</Button>
                <Button colorScheme='blue' className="im" onClick={decrement}> - </Button>        
                <Button colorScheme='blue' className="im" onClick={reset}>Borrar</Button> 
                
                <Button variant='solid' colorScheme='blue'  onClick={()=>addToCart(counter)}> Agregar </Button>
               
            </ButtonGroup>
      
    </>
  );
};

export default ItemCount;
