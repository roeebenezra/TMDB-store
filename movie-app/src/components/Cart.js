import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./style/cart.css";
import {CartTable} from "./CartTable";
import {SHOPPING_CART_CLEAR, SHOPPING_CART_DELETE, SHOPPING_CART_GET} from "./ApiConfig";
import {doDeleteInCart, getCart} from "./DoAxios";


/**
 * Shopping cart page component - displays all items in shopping cart
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Cart = (props) => {
    const [cart, setCart] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    /**
     * Get shopping cart data on page load and set cart size
     */
    useEffect(() => {
        getCart(SHOPPING_CART_GET, setErrorMessage, setCart, props.setItemsInCart);
    }, []);

    /**
     * Delete item from shopping cart and update cart size
     * @param e - event, delete button clicked
     */
    const handleDeleteItem = (e) => {
        doDeleteInCart(`${SHOPPING_CART_DELETE}/${e.target.id}`,
                                setErrorMessage, setCart, props.setItemsInCart);
    }

    /**
     * Delete all items from shopping cart and update cart size
     */
    const handleClearCart = () => {
        doDeleteInCart(SHOPPING_CART_CLEAR, setErrorMessage, setCart, props.setItemsInCart);
    };

    /**
     * Calculate total price of items in cart
     * @returns {string}
     */
    const cartTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.count * 3.99
        })
        return total.toFixed(2)
    }

    return (
        <>
            <p style={{color: 'red'}}>{errorMessage}</p>
            {cart.length > 0 ?
                <>
                    <h1 className='home-title'>Shopping Cart</h1>
                    <div className='flex-container'>
                        <CartTable data={cart} handleDeleteItem={handleDeleteItem}/>
                    </div>
                    {cart ? <p className='bold'>Total price: {cartTotal()}$</p> : null}
                    <Link to="/checkout">
                        <button className='button' onClick={() => props.setTotalPrice(cartTotal())}>Checkout</button>
                    </Link>
                    <button className='button delete' onClick={handleClearCart}>Clear cart</button>
                </>
                : <p className='home-title' style={{color: 'red'}}>Shopping cart is empty</p>}

            <Link to="/">
                <button className='button'>Continue shopping</button>
            </Link>
        </>
    );
}

export default Cart;