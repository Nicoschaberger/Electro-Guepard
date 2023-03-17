import { Center, Square, Circle } from '@chakra-ui/react'
import itemList from './itemList'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <Center h='100px' >
        <h1>
          <strong>{greeting}</strong>
        </h1>
      </Center>
      <itemList/>  
    </>
  )
}

export default ItemListContainer