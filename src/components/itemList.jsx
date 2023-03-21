import { Container } from "@chakra-ui/react";
import Item from "./Item";




const itemList = ( {datos} ) => {
  return (
    <>
    <Container className="main-catalogue">
        {datos.map((dat) => (
            <Item
            key={dat.id}
            imagen={dat.imagen}
            id={dat.id}
            nombre={dat.nombre}
            descripcion= {dat.descripcion}
            precio={dat.precio}
            stock={dat.stock}
            categoria={dat.categoria}
            />
            ))
        }
    </Container>   
    
  
    </>
  )
}

export default itemList;