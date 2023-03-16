import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import Data from "./data.json"



const App = () => {
  
  return (
    <>
    <ChakraProvider>
      
      <NavBar/>
      

      <ItemListContainer 
      greeting = {"Bienvenidos a Electro Guepard"}
      />
      

    </ChakraProvider>
    </>
  )
}

export default App
