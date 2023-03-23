import ItemDatail from "./ItemDatail"
import { useState } from "react"
import { useParams } from "react-router-dom"

const itemDetailContainer = () => {
  const { categoria } = useParams();
  console.log(categoria);

  const datFilter = datos.filter((dato) => dato.categoria === categoria)
  return (
    <div>
        <ItemDatail datos={datos}/>
    </div>
  )
}

export default itemDetailContainer