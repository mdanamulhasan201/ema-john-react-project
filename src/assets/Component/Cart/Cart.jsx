import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Cart = ({ cart }) => {
    // const cart = props.cart //option-1
    // const {cart} = props //option-2
 
    // *********total price + Shipping charge******
    let totalPrice =0;
    let totalShipping = 0;

    for(const product of cart){
            totalPrice = totalPrice + product.price;
            totalShipping = totalShipping + product.shipping
    }
    // ***********tax 7%********
    const tax = totalPrice*5/100;

    // Grand Total
    const grandTotal = totalPrice + totalShipping + tax;




    return (

        <div className="card w-96 bg-error shadow-xl m-5 sticky top-0">
            <div className="card-body">
                <h2 className="card-title">Order Summary</h2>
                <p>Selected item: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p> <span className='font-bold'>Grand Total:</span> ${grandTotal.toFixed(2)}</p>

                <button className="btn btn-neutral"> <span className='mr-2'>Clear Cart</span> <FontAwesomeIcon icon={faTrash} style={{ color: "#ededed", }} /></button>

                <button className="btn btn-warning"><span className='mr-2'>Review Order</span><FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", }} /></button>

            </div>
        </div>

    );
};

export default Cart;