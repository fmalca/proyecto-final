import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import { Link, useParams} from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { Alert } from 'bootstrap';
import {css} from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { Button } from 'react-bootstrap';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true) 
    const [itemExist, setItemExist] = useState(true)

    const override = css`
        display: block;
        margin: 0 auto;
        border-color : red;
        `;        
    
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const item = doc(db,"items",id)
        getDoc(item)
        .then(resp =>             
            {      
                resp.data()==undefined?setItemExist(false):setItemExist(true)
                setProduct( { id: resp.id, ...resp.data()} )
            } 
        )
        .catch( err => console.log("item no existe"))
        .finally(() => setLoading(false))
    },[id]) 

    return (
        <div className="sweet-loading">                               
            <FadeLoader loading={loading} css={override} height={10} width={3} radius={1} margin={1} />
            { itemExist
                ?
                loading || <ItemDetail product={product} /> 
                : <div><h6>Item no existe</h6><Link to ="/"><Button>Seguir comprando</Button></Link></div>
            }
        </div>  

    )
}

export default ItemDetailContainer