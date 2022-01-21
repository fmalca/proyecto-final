import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({item, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => { 
        if (count < item.stock )       
         setCount(count => count + 1)   
    }

    const substract = () => {
        if (count > 1)
        setCount(count => count - 1)   
    }

    return (
        <>  
            <center>
                <Button variant="secondary" size="sm" onClick={substract} >
                    - 
                </Button>

                <Button variant="success" size="sm">
                {count}
                </Button>                          

                <Button variant="secondary" size="sm" onClick={add} >            
                    + 
                </Button>
                <br/>
                <br/>
                <Button variant="secondary" size="sm" onClick={() => onAdd(count)} >            
                    Agregar al carrito
                </Button>

            </center>
        </>
    )
}

export default ItemCount