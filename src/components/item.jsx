import { Card, CardHeader, CardBody, CardFooter, Button, Stack } from '@chakra-ui/react'
import { Link } from "react-router-dom"

const item = ({id, nombre, precio, descripcion, stock, imagen}) => {
  return (
    <>
    <div key={id}>
    <Card maxW='sm'>
        <CardBody>
            <Image borderRadius='lg' src={imagen} />
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
                <Button variant='solid' colorScheme='blue'> Comprar ahora! </Button>
                <Button variant='ghost' colorScheme='blue'> Agregar al carrito </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    </div>
</>
  )
}

export default item;