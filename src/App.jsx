import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart"
import './App.css'
import StateComponent from "./context/CartContext"




const App = () => {
  return (
    <StateComponent>
    <BrowserRouter>
    <ChakraProvider>
      
      <NavBar/>    
      
      <Routes>
      <Route exact path="/" element={<ItemListContainer greeting = {"Bienvenidos a Electro Guepard"}/>} />
      <Route exact path="/catalogo" element={<ItemListContainer/>}/>
      <Route exact path="/categoria/:categoria" element={<ItemListContainer/>} />
      <Route exact path="/Item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      
      </Routes>

    </ChakraProvider>
    </BrowserRouter>
    </StateComponent>
  )
}

export default App







