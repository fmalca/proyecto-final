import { BsCart } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {cartList} = useContext(CartContext)   
    
    const total =  cartList.length ? cartList.map(obj => obj.quantity).reduce((a,b) => a + b) : '' 

    return (
        <div>
            <BsCart /><Badge bg="danger">{total}</Badge>
        </div>
    )
}

export default CartWidget