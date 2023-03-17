import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import Data from "./data.json"


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



import { useState } from 'react'


// function App() {
//   const [contador, setContador] = useState(0)
//   const restar = () => {
//     if(contador < 1){
//       alert = "no se pueden ingresar cantidades negativas"
//     } else {
//       setContador(contador - 1)
//     }
//   }
//   const onAdd = () => {
//     console.log("agregar al carrito")
//   }


//   return (
//     <>
//       <div>
//         <button onClick={() => setContador(contador + 1)}> + </button>
//         <h5>{contador}</h5>
//         <button onClick={restar}> - </button>
//         <button onClick={ () => setContador(0) }>borrar</button>
//         <button onClick={onAdd}>Agregar al carrito</button>
//       </div>
//     </>
//   )
// }

// export default App

