import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import btn from '@icons/bt_add_to_cart.svg';



function ProductItem({ product }) {
    const [count, setCount] = useState([]);

    const handleClick = () => {
        setCart([]);
    }
    
    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick} >
                    <img src={btn} alt="" />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;