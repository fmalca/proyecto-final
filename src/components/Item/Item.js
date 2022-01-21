import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'

const Item = ( {id, title, description,price, pictureUrl, category} ) => {    
    return (
        <>        
        <Row className="justify-content-md-center">              
            <Card style={{ width: '18rem' }} className="mb-2">                
                <Card.Header>{category.toUpperCase()}</Card.Header>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>       
                    <Button variant="light">                        
                        <Link to = {`/detail/${id}`} >
                        Ver detalle
                        </Link>    
                    </Button>                
                </Card.Body>
            </Card>            
        </Row>
        </>
    )
}
export default Item