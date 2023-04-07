import React from 'react'
import { Card, CardHeader, Text, Heading, ButtonGroup, Divider, CardBody, CardFooter, Button, Stack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../context/CounterCart'


const ItemDatail = ( {nombre, descripcion, precio, stock, imagen, counter, increment, decrement, reset} ) => {   


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
        <CardFooter>
            <ButtonGroup className='compra' spacing='2'>
                <Button colorScheme='blue' className="im" onClick={() => increment()}> + </Button>
                <Button onClick = {() => addToCart()} colorScheme='blue' className='im'>{counter}</Button>
                <Button colorScheme='blue' className="im" onClick={() => decrement()}> - </Button>        
                <Button colorScheme='blue' className="im" onClick={() => reset()}>Borrar</Button> 
                <Link to="/Cart">
                <Button variant='solid' colorScheme='blue' className='compra'> Agregar </Button>
                </Link>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </div>
    </>
    )}


export default ItemDatail