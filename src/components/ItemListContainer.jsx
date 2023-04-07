import { Center, Square, Circle } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from '../Data.json'
import { useEffect } from "react";
import Loading from "./Loading";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [datos, setDatos] = useState([]);
  const { categoria } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        setLoading(false);
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
  
  if(loading) { 
    return <Loading/>
  }



  return (
    <>
      <Center>
        <h1>
          <strong>{greeting}</strong>
        </h1>
      </Center>
        <ItemList datos={datos}/>
    
    </>
  );
};

export default ItemListContainer;