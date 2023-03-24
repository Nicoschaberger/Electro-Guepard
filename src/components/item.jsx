import { Card, CardHeader, CardBody, CardFooter, Button, Stack, Heading, Divider, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const item = ({id, imagen, nombre, descripcion, precio, stock, categoria}) => {
  return (
    <>
    <div key={id}>
    <Card className='carta' maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
                <Heading className='name' size='md'>{nombre}</Heading>
            </Stack>
        </CardBody>
    <Divider />
        <CardFooter>
            <ButtonGroup className='botones' spacing='2'>
                <Link to="/Cart">
                <Button variant='solid' colorScheme='blue'> Comprar ahora! </Button>
                </Link>
                <Button variant='ghost' colorScheme='blue'>
                <Link to="/Item/:id"> Descripcion </Link>
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    </div>
</>
  )
}

export default item;