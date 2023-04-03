import {collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Form = () => {
     
  const [orderId, setOrderId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
      e.preventDefault();

      addDoc(ordersCollection, order).then(({ id }) =>  setOrderId(id));
    };

      const order = {
      nombre, 
      email,
      };

  const ordersCollection = collection(db, "orden");


return (
  <div>
      <form onSubmit={handleSubmit} className="formulario">
          <input className="celda" 
            type="text" 
            placeholder="Nombre y Apellido" 
            onChange={(e)=> setNombre(e.target.value)}/>

          <input className="celda" 
            type="email" 
            placeholder="Email" 
            onChange={(e)=> setEmail(e.target.value)} />

          <Button className="submit" type="submit" colorScheme='blue'>Enviar</Button>
      </form>
      <p className="aviso"> El id de su compra es:<strong> {orderId}</strong></p>

  </div>
);
};

export default Form