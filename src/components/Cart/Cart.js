import React, { useContext } from 'react'
import { Button,Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const Cart = () => {    
    const {cartList, clearCartList, removeItem, getTotal} = useContext(CartContext)       

    return (
        <>
          {
            cartList.length ? 
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio $US</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                  cartList.map(
                    item => 
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price.toLocaleString('en-IN')}</td>
                      <td>{(item.price*item.quantity).toLocaleString('en-IN')}</td>
                      <td><Button onClick={() => removeItem(item.id) }> Eliminar</Button></td>
                    </tr>
                  )
                }
                </tbody>
              </Table>
              
              <h3>{`Total del carrito = $US ${getTotal().toLocaleString('en-IN')}`}</h3>
              <Button onClick={clearCartList} >Vaciar carrito</Button>    
              <br/>
              <br/>
              <Link to ="/order"><Button>Generar orden</Button></Link>

            </div>        
            : 
            <div>
              <p>No hay items seleccionados</p>
              <Link to ="/"><Button>Seguir comprando</Button></Link>
            </div>
          }
            
        </>
    )
}

export default Cart