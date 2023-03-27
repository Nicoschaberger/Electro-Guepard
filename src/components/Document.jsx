import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from 'react'

const Document = () => {
    const {id} = useParams(); 
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db, "categorias", `${id}`);

        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()){
                const docs = snapshot.data();
                setProduct(docs);
            }
        });
    }, []);


  return (
    <div>Document</div>
  )
}

export default Document