import React from 'react'
import ItemCount from './ItemCount'
import { Input, Stack, InputGroup, InputLeftAddon, InputRightAddon, Button } from '@chakra-ui/react'
import ItemDetailContainer from './ItemDetailContainer'


const Cart = () => {
  return (
    <>
    <ItemDetailContainer/>
    <ItemCount/>
    <Stack spacing={4} className='formulario'>
      <InputGroup>
        <InputLeftAddon children='+234' />
        <Input type='tel' placeholder='phone number' />
      </InputGroup>
      <InputGroup size='sm'>
        <InputLeftAddon children='https://' />
        <Input placeholder='mysite' />
        <InputRightAddon children='.com' />
      </InputGroup>
      <InputGroup size='sm'>
      <Button type="submit" className='submit' colorScheme='blue'>Enviar</Button>
      </InputGroup>
      
    </Stack>
    </>
  )
}

export default Cart