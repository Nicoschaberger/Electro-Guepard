import { Container } from "@chakra-ui/react";
import Item from "./Item";


const itemList = ({ categorias }) => {
  return (
    <>
    <Container className="main-catalogue">
        {categorias?.map((cat) => (
            <Item
            key={cat.id}
            imagen={cat.imagen}
            id={cat.id}
            nombre={cat.nombre}
            descripcion= {cat.descripcion}
            precio={cat.precio}
            stock={cat.precio}
            categoria={cat.categorias}
            />
            ))
        }
    </Container>
    
    
  
    </>
  )
}

export default itemList;