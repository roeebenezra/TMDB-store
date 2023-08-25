import NotFound from "./components/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {Checkout} from "./components/Checkout";
import {useState, createContext} from "react";
import PurchaseComplete from "./components/PurchaseComplete";

export const HistoryContext = createContext();


/**
 * App component - displays navbar and routes to home, cart, checkout, and purchase complete routes
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    // itemsInCart is the number of items in the cart
    const [itemsInCart, setItemsInCart] = useState(0);
    // totalPrice is the total price of the items in the cart
    const [totalPrice, setTotalPrice] = useState(0);
    // searchHistory is the search history of the current user
    const [searchHistory, setSearchHistory] = useState([])


    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar itemsInCart={itemsInCart}/>
                <Routes>
                    <Route path="/" element={
                        <HistoryContext.Provider value={{searchHistory, setSearchHistory}}>
                            <Home itemsInCart={itemsInCart}
                                  setItemsInCart={setItemsInCart}/>
                        </HistoryContext.Provider>
                    }/>
                    <Route path="/cart" element={<Cart itemsInCart={itemsInCart}
                                                       setItemsInCart={setItemsInCart}
                                                       setTotalPrice={setTotalPrice}/>}/>
                    {itemsInCart > 0 ?
                        <>
                            <Route path="/checkout" element={<Checkout totalPrice={totalPrice}/>}/>
                            <Route path="/checkout/success" element={<PurchaseComplete/>}/>
                        </> :
                        <Route path="/checkout/*" element={<NotFound
                            msg={'You need to navigate throw the cart to checkout and commit a purchase!'}/>}/>}
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;