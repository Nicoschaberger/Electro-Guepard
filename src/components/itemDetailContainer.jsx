import ItemDatail from "./ItemDatail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import products from '../Data.json'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({})
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  useEffect(() => {
    getDatos().then((res)=> setItem(res.find((prod)=> prod.id === parseInt(id))))
  },[id])
  
  return (
    <div>
        <ItemDatail nombre={item.nombre} categoria={item.categoria} descripcion={item.descripcion} precio={item.precio} stock={item.stock} id={item.id} imagen={item.imagen}/>
    </div>
  )
}

export default ItemDetailContainer