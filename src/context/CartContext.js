import {createContext, useState} from 'react'
import React from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addItem(item){
        const itemInCart = cartList.find( obj => obj.id === item.id ) 
        if (itemInCart){
            itemInCart.quantity += item.quantity                 
            setCartList([...cartList.filter( x=>x.id !== item.id),itemInCart ])
        } else {
            setCartList([...cartList, item])       
        }
    }


    function getTotal() {
        return cartList.length?
        cartList.map( item => item.quantity*item.price).reduce((a,b)=> a+b)   
        :
        0
    }

    function removeItem(itemId){
        setCartList(cartList.filter( item => item.id !== itemId))
    }

    function clearCartList(){
        setCartList([])
    }

    return (
        <>
           <CartContext.Provider value = {
               {cartList,
               setCartList,
               addItem,
               removeItem,
               clearCartList,
               getTotal               
               }
           }>
            {children}
           </CartContext.Provider>             
        </>
    )
}