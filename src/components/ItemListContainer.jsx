import { Center, Square, Circle } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from '../Data.json'
import { useEffect } from "react";

const ItemListContainer = ({ greeting }) => {
  const [datos, setDatos] = useState([]);
  const { categoria } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
 
  useEffect(()=>{
    getDatos()
    .then((res)=> {
      if(categoria){
        setDatos(res.filter((item)=>item.categoria === categoria))
      }else{
        setDatos(res)
      }
    })
  },[categoria])



  return (
    <>
      <Center h="100px">
        <h1>
          <strong>{greeting}</strong>
        </h1>
        <ItemList datos={datos}/>
      </Center>
    
    </>
  );
};

export default ItemListContainer;