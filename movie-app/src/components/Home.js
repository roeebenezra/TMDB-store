import {useEffect, useState} from 'react';
import '../App.css';
import ResultsContainer from "./ResultsContainer";
import Search from "./Search";
import {API_MOVIE_TREND, API_TV_TREND, SHOPPING_CART_SIZE} from "./ApiConfig";
import SearchAttributes from "./SearchAttributes";
import {getCartSize, getTrendingData} from "./DoAxios";
import {Loader, SetLoader} from "./Loader";
import {PageNavigation} from "./PageNavigation";


/**
 * Home page component - displays trending movies & TV Shows
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Home = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [movieData, setMovieData] = useState([]);
    const [tvData, setTvData] = useState([]);
    const [search, setSearch] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchAttributes, setSearchAttributes] = useState(false);

    /**
     * Get trending movie & TV Shows data on page load
     */
    useEffect(() => {
        if (!search && !searchAttributes) {
            if (pageNumber === 0) {
                setPageNumber(1)
            }
            SetLoader(setLoading)
            setSearch(false);   // reset search state on Home page load
            getTrendingData(API_MOVIE_TREND, API_TV_TREND, setErrorMessage, setMovieData, setTvData, pageNumber);
            getCartSize(SHOPPING_CART_SIZE, setErrorMessage, props.setItemsInCart);
        }
        if (search) {
            setSearchAttributes(false)
        }
    }, [pageNumber]);


    return (
        <>
            <Search search={search} setSearch={setSearch} setSearchResults={setSearchResults}
                    setErrorMessage={setErrorMessage} setLoading={setLoading}
                    pageNumber={pageNumber} setPageNumber={setPageNumber} setSearchAttributes={setSearchAttributes}/>

            <SearchAttributes setSearch={setSearch} setTvData={setTvData}
                              setMovieData={setMovieData} setLoading={setLoading}
                              pageNumber={pageNumber} setPageNumber={setPageNumber}
                              searchAttributes={searchAttributes} setSearchAttributes={setSearchAttributes}/>

            <PageNavigation setPageNumber={setPageNumber} pageNumber={pageNumber}/>
            {loading ? <Loader/> : null}
            {search ?
                <>
                    <ResultsContainer title="Search results" data={searchResults} itemsInCart={props.itemsInCart}
                                      setItemsInCart={props.setItemsInCart}/>
                    {searchResults.length === 0 &&
                        <p style={{color: 'red'}}>{errorMessage}</p>}
                </>
                : <>
                    <p style={{color: 'red'}}>{errorMessage}</p>
                    <ResultsContainer title="Trending Movies" data={movieData} itemsInCart={props.itemsInCart}
                                      setItemsInCart={props.setItemsInCart}/>
                    <ResultsContainer title="Trending TV Shows" data={tvData} itemsInCart={props.itemsInCart}
                                      setItemsInCart={props.setItemsInCart}/>
                </>
            }
        </>
    );
}

export default Home;