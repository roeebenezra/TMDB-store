import {useState, useContext, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import "./style/search.css"
import "../App.css"
import SearchHistory from "./SearchHistory";
import {API_MOVIE_SEARCH} from "./ApiConfig";
import {HistoryContext} from "../App";
import {doSearch} from "./DoAxios";
import {SetLoader} from "./Loader";


/**
 * Search component - search bar and search history
 * @param props - setSearchResults is the function to set search results
 * @returns {JSX.Element}
 * @constructor
 */
const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    const {searchHistory, setSearchHistory} = useContext(HistoryContext)
    const [pageNumber, setPageNumber] = useState(1)


    /**
     * Get more search results on page number change
     */
    useEffect(() => {
        if (props.search) {
            setPageNumber(pageNumber + 1)
            SetLoader(props.setLoading)
            doSearch(`${API_MOVIE_SEARCH}${searchQuery}`,
                props.setSearchResults, props.setErrorMessage, props.pageNumber);
        }
    }, [props.pageNumber])


    /**
     * Handle search query from user
     * @param e
     */
    const handleSearch = (e) => {
        props.setSearch(true)
        props.setSearchAttributes(false)
        SetLoader(props.setLoading)
        doSearch(`${API_MOVIE_SEARCH}${e.target.id ? e.target.id : searchQuery}`,
            props.setSearchResults, props.setErrorMessage, 1);
        if (!e.target.id) {
            setSearchHistory([...searchHistory, searchQuery])
        }
        setPageNumber(2)
    }


    /**
     * Handle search query from user pressing Enter key
     * @param e
     */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e)
        }
    }


    return (
        <div>
            <SearchHistory HandleSearch={handleSearch}
                           setSearchQuery={setSearchQuery}/>
            <div className="search-component">
                <input
                    placeholder="Search for a movie or TV show"
                    className="search__input"
                    name="searchQuery"
                    type="text"
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className="search__button" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
        </div>
    )
};


export default Search;

