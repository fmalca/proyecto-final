import Alert from "react-bootstrap/Alert";
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import {useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import {collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import {css} from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) 
    const {idCat} = useParams()               
    
    const override = css`
        display: block;
        margin: 0 auto;
        border-color : red;
        `;    

    useEffect(() => {

        const db = getFirestore();        
        const items = 
            idCat
            ? query(collection(db,'items'),where('category','==',idCat))       
            : collection(db,'items')         

        getDocs(items)
        .then(resp => setProducts( resp.docs.map( prod => ({id:prod.id, ...prod.data()}) ) ))
        .catch( err => console.log(err))
        .finally( () => setLoading(false))

    },[idCat]) 

    return (        
        <div className="sweet-loading">                               
            <FadeLoader loading={loading} css={override} height={10} width={3} radius={1} margin={1} />
            <ItemList data={products} />                                              
        </div>        
    )
}

export default ItemListContainer