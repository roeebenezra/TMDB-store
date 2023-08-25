import {useEffect, useState} from "react";
import {API_MOVIE_FILTER, API_MOVIE_GENRES_LIST, API_TV_FILTER} from "./ApiConfig";
import {getGenresList, getTrendingData} from "./DoAxios";
import {SetLoader} from "./Loader";


const SearchAttributes = (props) => {
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')
    const [genreList, setGenreList] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [change, setChange] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    /**
     * Get filtered data on change of release date or genre
     *
     */
    useEffect(() => {
        if(props.searchAttributes){
            const handleChangeAttributes = () => {
                SetLoader(props.setLoading)
                const movieUrl = `${API_MOVIE_FILTER}${releaseDate}&with_genres=${genre}`
                const tvUrl = `${API_TV_FILTER}${releaseDate}&with_genres=${genre}`
                props.setSearch(false);
                getTrendingData(movieUrl, tvUrl, setErrorMessage, props.setMovieData, props.setTvData, pageNumber);
            }

            handleChangeAttributes();
            setPageNumber(pageNumber + 1)
        }
    }, [change, props.pageNumber]);


    /**
     * Get list of genres on page load
     */
    useEffect(() => {
        getGenreList();
    }, []);


    /**
     * Get list of genres from API
     */
    const getGenreList = () => {
        getGenresList(API_MOVIE_GENRES_LIST, setErrorMessage, setGenreList);
    }

    /**
     * Handle date change in date picker
     * @param e - event
     */
    const handleDateChange = (e) => {
        setPageNumber(1)
        props.setSearchAttributes(true)
        setReleaseDate(e.target.value)
        setChange(!change)
    }

    /**
     * Handle genre change in select element (dropdown)
     * @param e - event
     */
    const handleGenreChange = (e) => {
        setPageNumber(1)
        props.setSearchAttributes(true)
        setGenre(e.target.options[e.target.selectedIndex].id)
        setChange(!change)
    }


    return (
        <>
            <p style={{color: 'red'}}>{errorMessage}</p>
            <h5>Select genre or release date for advanced search</h5>
            <select placeholder='genre' id='select-genre'
                    onChange={handleGenreChange}>
                <option id={''} value={''}>select genre</option>
                {genreList.map(genre => {
                    return <option key={genre.id} id={genre.id} value={genre.name}>{genre.name}</option>
                })}
            </select>
            <input id='date-picker' className='date' type="date" placeholder='release date'
                   onSelect={handleDateChange}/>
        </>
    )
}

export default SearchAttributes;