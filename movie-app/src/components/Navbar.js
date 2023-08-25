import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./style/navbar.css";


/**
 * Navbar component - displays navbar with links to home and cart
 * @param itemsInCart
 * @returns {JSX.Element}
 * @constructor
 */
export const Navbar = ({itemsInCart}) => {

    return (
        <div className="navbar">
            <p className="nav-title">TMDB Store</p>
            <div className="links">
                <p>Cart: {itemsInCart} items</p>
                <Link to="/">Home</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    );
};