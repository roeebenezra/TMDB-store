import '../App.css'
import {useState} from "react";
import {SHOPPING_CART_ADD} from "./ApiConfig";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart} from "./DoAxios";


/**
 * ResultsContainer component - displays movie or TV Show results
 *
 * @param props - title: is the title of the results container,
 *                data: is the data to be displayed,
 *                itemsInCart: is the number of items in the cart,
 *                setItemsInCart: is the function to set the number of items in the cart
 *
 * @returns {JSX.Element}
 */
const ResultsContainer = (props) => {
    const [errorMessage, setErrorMessage] = useState('')

    const handleAddToCart = (e) => {
        const product = props.data.find(product => product.id === parseInt(e.target.id));

        const prodToAdd = {
            id: product.id,
            title: product.original_title ? product.original_title : product.original_name,
            img: product.poster_path,
            releaseDate: product.release_date ? product.release_date : product.first_air_date,
        }

        // send post request to add item to cart, then display message
        addToCart(SHOPPING_CART_ADD, prodToAdd, setErrorMessage, props.setItemsInCart, props.itemsInCart, toast);
    }


    return (
        <>
            {errorMessage ? <p style={{color: 'red'}}>{errorMessage}</p> : null}
            <div>
                <p className='home-title'>{props.title}</p>
                <ToastContainer/>
            </div>
            <div className='flex-container'>
                {props.data.map((item, key) =>
                    <div key={key} className="movie_item">
                        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.id}/>
                        <div className="movie_name">
                            {item.original_title ? item.original_title : item.original_name}
                        </div>
                        <div className='movie-description'>
                            <p><b>Release date:</b> {item.release_date ? item.release_date : item.first_air_date}</p>
                            <p><b>Rating:</b> {item.vote_count > 0 ? item.vote_average : 'not rated'}</p>
                        </div>
                        <div className='overview-btn'>overview
                            <div className={'overview'}><b>Overview</b><p>{item.overview}</p></div>
                        </div>
                        <button className='button add-to-cart' id={item.id} onClick={handleAddToCart}>
                            Add to cart
                        </button>
                        <p>3.99$</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ResultsContainer;