import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {      

    return (
        <>
            {data.map(
                product =>
                <div key={product.id}>            
                    <Item 
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      pictureUrl={product.pictureUrl}
                      category = {product.category} 
                       />
                </div>
                )
            }                        
        </>
    )
}

export default ItemList