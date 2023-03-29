import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
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



    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = []
        // step -1: get id of the addedProduct
        for (const id in storedCart) {
            //step 2: get product from products state by using id 
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3: add quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                // step 4: add the addedProduct to the saved cart 
                saveCart.push(addedProduct);

            }
            // console.log('added Product', addedProduct)
        }
        // step: 5 set the cart
        setCart(saveCart)
    }, [products])



    // event handler
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)


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
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;