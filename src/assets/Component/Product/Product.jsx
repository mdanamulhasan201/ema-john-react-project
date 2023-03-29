import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {

    const handleAddToCart = props.handleAddToCart;


    const { img, name, seller, price, ratings } = props.product;
    return (
        <div>
            <div className="card card-compact w-full  bg-base-100 shadow-2xl mt-5">
                <figure><img className='rounded-2xl p-1' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h4 className="text-base font-bold">{name}</h4>
                    <p className='font-bold mb-5'>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Starts</p>
                    
                        <button onClick={()=> handleAddToCart(props.product)} className="btn btn-warning"> <span className='mr-2'>Add to cart</span> <FontAwesomeIcon icon={faShoppingCart} /></button>
                   
                </div>
            </div>
        </div>
    );
};

export default Product;