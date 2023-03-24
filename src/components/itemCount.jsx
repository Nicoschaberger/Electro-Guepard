import React from "react";
import { useState } from "react";

const ItemCount = () => {
  const [Contador, setContador] = useState(0); 
    const restar = () => {
      if (Contador < 1) {
        alert = "no se pueden ingresar cantidades negativas";
      }
      {
        setCounter(Contador - 1);
      }
    };
    const onAdd = () => {
      console.log("agregar al carrito");
    };

  return (
    <div>
      <button onClick={() => setContador(Contador + 1)}> + </button><h5>{Contador}</h5><button onClick={restar}> - </button><br />
      <button onClick={() => setContador(0)}>Borrar</button> <br />
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
