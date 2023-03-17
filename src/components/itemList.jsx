import item from "./item";
import { Container } from "@chakra-ui/react";


const itemList = ({ categorias }) => {
  return (
    <>
    <Container className="main-catalogue">
        {categorias?.map((cat) => (
            <item
            key={cat.id}
            id={cat.id}
            nombre={cat.nombre}
            descripcion= {cat.descripcion}
            precio={cat.precio}
            stock={cat.precio}
            categoria={cat.categorias}
            imagen={cat.imagen}
            />
            ))
        }
    </Container>
    
  
    </>
  )
}

export default itemList;