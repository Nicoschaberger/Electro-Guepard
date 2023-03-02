
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <>
    <ChakraProvider>
      <h1> 
        <strong> GUEPARD </strong>
      </h1>
      <NavBar/>

      <ItemListContainer 
      saludo = {"Bienvenidos a Electro Guepard"}
      />

    </ChakraProvider>
    </>
  )
}

export default App
