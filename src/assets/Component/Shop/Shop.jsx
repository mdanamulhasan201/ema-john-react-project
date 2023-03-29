import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // event handler
    const handleAddToCart = (product) => {
        const newCart =[...cart, product];
        setCart(newCart);
 
 
     }

    return (
        <div className='shop-container'>
            {/* cart */}
            <div className='product-container ms-9 grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>

            {/* calculator */}
            <div className='cart-container'>
            <h4 className='font-bold mb-5'>Order summary</h4>
                <p>Selected item: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;