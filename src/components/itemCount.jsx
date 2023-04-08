import ItemDatail from './ItemDatail'
import { useState } from 'react'

const ItemCount = () => {

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
  
  console.log(counter);
  
  return (
    <> 
          
      <ItemDatail increment={increment} decrement={decrement} reset={reset} counter={counter}/>
      
    </>
  );
};

export default ItemCount;
