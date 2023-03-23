import React from 'react'
import ItemCount from './ItemCount'
import { Input, Stack, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react'


const Cart = () => {
  return (
    <>

    <Stack spacing={4}>
      <InputGroup>
        <InputLeftAddon children='+234' />
        <Input type='tel' placeholder='phone number' />
      </InputGroup>
        <InputLeftAddon children='Nombre Completo' />
        <Input type='text' placeholder='Nombre completo' />
      <InputGroup size='sm'>
        <InputLeftAddon children='https://' />
        <Input placeholder='mysite' />
        <InputRightAddon children='.com' />
      </InputGroup>
    </Stack>
    <ItemCount/>
    </>
  )
}

export default Cart