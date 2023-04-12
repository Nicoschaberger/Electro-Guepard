import { Card, CardHeader, Text, Heading, ButtonGroup, Divider, CardBody, CardFooter, Button, Stack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/ShoppingCartProvider'

const ItemDatail = ( {nombre, descripcion, precio, stock, imagen, id} ) => {

  const{ setCart } = useContext(CartContext)

  const [purchase, setPurchase] = useState(false)

  const addToCart = (counter) => {
    setPurchase(true)
    setCart((currItems) => {
      const itemFound = currItems.find((item) => item.id === id);
      if(itemFound){
        return currItems.map((item) => {
          if (item.id === id){
            return {...item, counter: item.counter + counter};
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, {id, counter,  precio, nombre}];
      }
    });
  };
      

  return (
    <>
    <div className='car'>
        <Card maxW='sm'>
        <CardBody>
            <Image className='imagenes'
            src={imagen}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3' className='nombre'>
                <Heading size='md' >{nombre}</Heading>
                <Text> {descripcion} </Text>
                <Text color='blue.600' fontSize='2xl'> Precio: {precio} </Text>
                <Text> Stock: {stock} </Text>
            </Stack>
        </CardBody>
    <Divider />
        <CardFooter className='op'>
           { purchase 
           ? <Link to='/Cart'>
            <Button variant='solid' colorScheme='blue'>Ir al carrito</Button>
            </Link>
           :<ItemCount addToCart={addToCart}/>}
        </CardFooter>
        </Card>
    </div>

    </>
    )}


export default ItemDatail