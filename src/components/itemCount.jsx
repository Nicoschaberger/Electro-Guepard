import React from 'react'
import { useState } from 'react'

const itemCount = () => {
    function App() {
        const [contador, setContador] = useState(0)
        const restar = () => {
          if(contador < 1){
            alert = "no se pueden ingresar cantidades negativas"
          } else {
            setContador(contador - 1)
          }
        }
        const onAdd = () => {
          console.log("agregar al carrito")
        }   
      }
      App();
      
  return (
    <div>        
    <button onClick={() => setContador(contador + 1)}> + </button>
    <h5>{contador}</h5>
    <button onClick={restar}> - </button>
    <button onClick={ () => setContador(0) }>borrar</button>
    <button onClick= {onAdd} >Agregar al carrito</button>
    </div>
  )
}

export default itemCount