import {useState} from "react";
import "./style/checkout.css"
import {API_PURCHASES_ADD, SHOPPING_CART_CLEAR} from "./ApiConfig";
import {useNavigate} from "react-router-dom";
import {doPurchase} from "./DoAxios";


/**
 * Checkout component - displays checkout form and handles purchase
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Checkout = (props) => {
    // error message to be displayed
    const [errorMessage, setErrorMessage] = useState('');
    // purchase object to be sent to database
    const [purchase, setPurchase] = useState(
        {email: '', payment: props.totalPrice, firstName: '', lastName: ''});   // purchase object to be sent to database
    // navigate variable to navigate to another page
    const navigate = useNavigate();


    /**
     * Handle purchase button click
     */
    const handlePurchase = () => {
        doPurchase(API_PURCHASES_ADD, SHOPPING_CART_CLEAR, purchase, setErrorMessage, navigate)
    }

    /**
     * Set input values to purchase object
     * @param e
     */
    const setInput = (e) => {
        setPurchase({...purchase, [e.target.name]: e.target.value})
    }

    return (
        <div className='card'>
            <div>
                <div className="checkout">
                    <h2>Checkout</h2>
                    <p>Total price: {props.totalPrice}$</p>
                </div>
                <div className="inputBox" style={{color: 'red'}}>{errorMessage}</div>
                <div className="inputBox">
                    <input onChange={setInput} type="text" name='firstName' required></input>
                    <span>First Name</span>
                </div>
                <div className="inputBox">
                    <input onChange={setInput} type="text" name='lastName' required></input>
                    <span>Last Name</span>
                </div>
                <div className="inputBox">
                    <input onChange={setInput} type="email" name='email' required></input>
                    <span>Email</span>
                </div>
                <button onClick={handlePurchase} className="enter">Purchase</button>
            </div>
        </div>
    );
}