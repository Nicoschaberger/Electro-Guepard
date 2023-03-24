import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Stack } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDatail = (nombre, descripcion, precio, stock, datos) => {   

  return (
    <>
        <Card maxW='sm'>
        <CardBody>
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
                <ItemCount/>
                </Link>
            </ButtonGroup>
        </CardFooter>
        </Card>
    </>
    )}


export default ItemDatail