import axios from "axios";
import {handleResponse} from "./HandleResponse";

// DoAxios.js - functions to handle axios requests

/**
 * Get shopping cart size from server
 *
 * @param setErrorMessage
 * @param setItemsInCart
 * @param url - url to get shopping cart size
 */
export const getCartSize = (url, setErrorMessage, setItemsInCart) => {
    setErrorMessage('')
    axios.get(url)
        .then(handleResponse)
        .then(data => {
            setItemsInCart(data)
        }).catch(err => {
            setErrorMessage(`${err.message}, in get cart size`)
    });
}


/**
 * Delete all items/one item from shopping cart, and update cart size
 *
 * @param url - url to delete from shopping cart
 * @param setErrorMessage - set error message
 * @param setCart - set cart data
 * @param setItemsInCart - set items in cart size
 */
export const doDeleteInCart = (url, setErrorMessage, setCart, setItemsInCart) => {
    setErrorMessage('')
    axios.delete(url)
        .then(handleResponse)
        .then(data => {
            setCart(data)
            setItemsInCart(data.length)
        })
        .catch(err => setErrorMessage(`${err.message}, while trying to delete from cart`));
}

/**
 * Get shopping cart data from server, and update cart size
 *
 * @param url - url to get shopping cart data
 * @param setErrorMessage - set error message
 * @param setCart - set cart data
 * @param setItemsInCart - set items in cart size
 */
export const getCart = (url, setErrorMessage, setCart, setItemsInCart) => {
    setErrorMessage('')
    axios.get(url)
        .then(handleResponse)
        .then(data => {
            setCart(data)
            setItemsInCart(data.length)
        })
        .catch(err => setErrorMessage(`${err.message}, while trying to get cart data`));
}

/**
 * add item to shopping cart, and update cart size
 * @param url - url to add item to shopping cart
 * @param product - product to add to shopping cart
 * @param setErrorMessage - set error message
 * @param setItemsInCart - set items in cart size
 * @param itemsInCart - items in cart size
 * @param toast - toast message to show
 */
export const addToCart = (url, product, setErrorMessage, setItemsInCart, itemsInCart, toast) => {
    setErrorMessage('')
    axios.post(url, product)
        .then(handleResponse)
        .then(data => {
            toast.success(`${data.count} '${data.title}' added to cart`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
            if (data.count === 1)
                setItemsInCart(itemsInCart + 1)
        })
        .catch(err => setErrorMessage(`${err.message}, while trying to add to cart`));
}


/**
 * Get trending data from api server and set results
 *
 * @param movie_url - url to get trending movies
 * @param tv_url - url to get trending tv shows
 * @param setErrorMessage - set error message
 * @param setMovieData - set trending movies data
 * @param setTvData - set trending tv shows data
 * @param page - page number
 */
export const getTrendingData = (movie_url, tv_url, setErrorMessage, setMovieData, setTvData, page) => {
    setErrorMessage('')
    axios.get(`${movie_url}&page=${page}`)
        .then(handleResponse)
        .then(data => {
            setMovieData(data.results);
            axios.get(`${tv_url}&page=${page}`)
                .then(handleResponse)
                .then(data => setTvData(data.results))
                .catch(err => setErrorMessage(`${err.message}, while trying to get trending data`));
        }).catch(err => setErrorMessage(`${err.message}, while trying to get trending data`));
}


/**
 * Get search results from server and set search results
 *
 * @param url - url to get search results
 * @param setSearchResults - set search results
 * @param setErrorMessage - set error message
 * @param page - page number
 */
export const doSearch = (url, setSearchResults, setErrorMessage, page) => {
    setErrorMessage('')
    axios.get(`${url}&page=${page}`)
        .then(handleResponse)
        .then(data => {
            setSearchResults(data.results)
            if (data.results.length === 0) {
                setErrorMessage("No results found")
            }
        }).catch(err => setErrorMessage(`${err.message}, while trying to search`));
}


/**
 * Post purchase to server, clear shopping cart, and navigate to success page
 * @param purchaseUrl - url to post purchase
 * @param clearUrl - url to clear shopping cart
 * @param purchase - purchase to post
 * @param setErrorMessage - set error message
 * @param navigate - navigate to success page
 */
export const doPurchase = (purchaseUrl, clearUrl, purchase, setErrorMessage, navigate) => {
    setErrorMessage('')
    axios.post(purchaseUrl, purchase)   // add purchase to database
        .then(handleResponse)
        .then(() => {
            axios.delete(clearUrl)    // clear shopping cart
                .then(handleResponse)
                .then(() => navigate('/checkout/success'))
                .catch(err => setErrorMessage(`${err.message} in clearing shopping cart`));
        })
        .catch(err => setErrorMessage(`${err.message} in adding purchase to database`));
}


/**
 * Get genres list from api server and set genres list
 *
 * @param url - url to get genres list
 * @param setErrorMessage - set error message
 * @param setGenresList - set genres list
 */
export const getGenresList = (url, setErrorMessage, setGenresList) => {
    setErrorMessage('')
    axios.get(url)
        .then(handleResponse)
        .then(data => {
            setGenresList(data.genres)
        }).catch(err => setErrorMessage(`${err.message}, while trying to get genres list`));
}
