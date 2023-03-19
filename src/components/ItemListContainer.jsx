import { Center, Square, Circle } from '@chakra-ui/react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <Center h='100px' >
        <h1>
          <strong>{greeting}</strong>
        </h1>
      </Center>
      <ItemList/>  
    </>
  )
}

export default ItemListContainer