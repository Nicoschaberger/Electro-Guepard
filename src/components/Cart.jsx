import React from 'react'
import ItemCount from './ItemCount'
import { Input, Stack, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react'


const Cart = () => {
  return (
    <>
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
    </Stack>
    </>
  )
}

export default Cart