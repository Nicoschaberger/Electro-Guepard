import ItemDatail from "./ItemDatail"
import { useState } from "react"
import { useParams } from "react-router-dom"

const itemDetailContainer = () => {
  const { categoria } = useParams();
  console.log(categoria);


  return (
    <div>
        <ItemDatail/>
    </div>
  )
}

export default itemDetailContainer