import { Center, Square, Circle } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <Center h='100px' >
        <h1>
          <strong>{greeting}</strong>
        </h1>
      </Center>    
    </>
  )
}

export default ItemListContainer