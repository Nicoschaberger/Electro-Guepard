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
                <Button variant='solid' colorScheme='blue'> Comprar ahora! </Button>
                <Button variant='ghost' colorScheme='blue'>
                <Link to={`/item/${id}`}> Descripcion</Link>
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    </div>
</>
  )
}

export default item;