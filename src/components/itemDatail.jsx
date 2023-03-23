import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Stack } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { useState } from 'react'


const itemDatail = ( {datos} ) => {
    const { id }= useParams();
    const [productos, setProductos] = useState([])

    const datoFilter = datos.filter((dato) => dato.id == id);

  return (
    <>
        {datoFilter.map((dato) =>
        <div key={id}>
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
                <ItemCount/>
                <Button variant='solid' colorScheme='blue'> Agregar al carrito </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
        </div>
        )};
    </>
    )
}

export default itemDatail