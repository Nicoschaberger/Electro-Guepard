import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import ItemDatailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart"



const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider>
      
      <NavBar/>    
      
      <Routes>
      <Route exact path="/" element={<ItemListContainer greeting = {"Bienvenidos a Electro Guepard"}/>} />
      <Route exact path="/catalogo" element={<ItemListContainer/>}/>
      <Route exact path="/categoria/:id" element={<ItemDatailContainer/>} />
      <Route exact path="/Item/:id" element={<ItemDatailContainer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      
      </Routes>

    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App







