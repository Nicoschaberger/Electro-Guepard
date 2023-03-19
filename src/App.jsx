import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import Data from "./data.json"
import ItemDatailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart"


const App = () => {

  const getDatos = () => {
    return new Promise ((resolve, reject) =>{
      if (Data.length === 0){
        reject (new Error("No hay datos"));
      } else{
        setTimeout(() =>{
          resolve(Data);
        }, 2000);
      }
    })
  }
  getDatos();
  console.log(Data);

  async function fetchingData(){
    try{
      const datosFetched = await getDatos();
    } catch (error){
      console.log(error)
    }
  }
  fetchingData();

  return (
    <BrowserRouter>
    <ChakraProvider>
      
      <NavBar/>
      
      <Routes>

      <Route exact path="/" Element={<ItemListContainer/>} greeting = {"Bienvenidos a Electro Guepard"}  />      
      <Route exact path="/Inicio" Element={<ItemDatailContainer/>}/>
      <Route exact path="/Cart" element={<Cart/>}/>
      
      </Routes>

    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App







