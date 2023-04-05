import React from 'react'
import { Card, CardHeader, Text, Heading, ButtonGroup, Divider, CardBody, CardFooter, Button, Stack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ShoppingCartProvider from '../context/ShoppingCartProvider'
import CounterCart from '../context/CounterCart'


const ItemDatail = ( {nombre, descripcion, precio, stock, imagen, categoria} ) => {   

  return (
    <>
    <CounterCart>
    <ShoppingCartProvider>
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
                <Link to="/Cart">
                <Button variant='solid' colorScheme='blue'> Agregar al carrito </Button> 
                </Link>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </div>
    </ShoppingCartProvider>
    </CounterCart>
    </>
    )}


export default ItemDatail