import React, { useState,useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {

    const [gotoCart, setGoToCart] = useState(false);  
    const {addItem} = useContext(CartContext)       

    const onAdd = (cant) => {                
        addItem({...product,quantity:cant })
        setGoToCart(true)
    }

    return (        
        <>  <hr/>
            <Row className="justify-content-md-center">  
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Detalle del producto</Card.Header>
                    <Card.Img variant="top" src={product.pictureUrl} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            <li>ID: {product.id}</li>
                            <li>Descripción: {product.description}</li>
                            <li>Precio: $ {product.price}</li>                
                            <li>Stock: {product.stock} unidades</li>                
                        </Card.Text>                                                            
                    </Card.Body>                    
                </Card>
                <Card style={{ width: '18rem' }} >
                    <Card.Body className="align-items-center">                    
                    { !gotoCart
                    ? <ItemCount item={product} onAdd={onAdd} /> 
                    : <center><Link to="/Cart"><Button variant="secondary" size="sm">Terminar mi compra</Button></Link></center>                    
                    }  
                    </Card.Body>
                </Card>
            </Row>               
        </>
    )
}

export default ItemDetail