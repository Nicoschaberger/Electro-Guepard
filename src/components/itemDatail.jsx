import React from 'react'
import { Card, CardHeader, Text, Heading, ButtonGroup, Divider, CardBody, CardFooter, Button, Stack, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const ItemDatail = ( {nombre, descripcion, precio, stock, imagen, categoria} ) => {   

  return (
    <div className='carta'>
        <Card maxW='sm'>
        <CardBody>
            <Image className='imagenes'
            src={imagen}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{nombre}</Heading>
                <Text> Descripcion: {descripcion} </Text>
                <Text color='blue.600' fontSize='2xl'> Precio: {precio} </Text>
                <Text> Stock: {stock} </Text>
            </Stack>
        </CardBody>
    <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Link to="/Cart">
                <Button variant='solid' colorScheme='blue'> Agregar al carrito </Button> 
                </Link>
                <ItemCount/>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </div>
    )}


export default ItemDatail