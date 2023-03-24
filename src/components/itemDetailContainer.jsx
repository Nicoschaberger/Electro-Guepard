import ItemDatail from "./ItemDatail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({})

  useEffect(() => {
  },[item])

  id = datos.find((dato) => dato.id === id)
  
  return (
    <div>
        <ItemDatail nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} stock={item.stock} id={item.id}/>
    </div>
  )
}

export default ItemDetailContainer