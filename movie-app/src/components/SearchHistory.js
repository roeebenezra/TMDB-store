import {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import {HistoryContext} from "../App";

/**
 * Search history component - displays search history
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SearchHistory = (props) => {
    const [show, setShow] = useState(false);
    const {searchHistory, setSearchHistory} = useContext(HistoryContext);

    /**
     * Handle closing and showing of modal
     */
    const handleClose = () => setShow(false);

    /**
     * Handle showing of modal and setting search query
     */
    const handleShow = () => setShow(true);

    /**
     * Handle search query from user clicking on history link query
     * @param e - event
     */
    const handleLinkClick = (e) => {
        handleClose()
        props.HandleSearch(e)
    }

    /**
     * Handle deleting of search history item
     * @param e
     */
    const handleDeleteItem = (e) => {
        searchHistory.splice(e.target.key, 1)
        setSearchHistory([...searchHistory]);
    }

    /**
     * Handle clearing of search history
     */
    const handleClearHistory = () => {
        setSearchHistory([]);
    }

    return (
        <>
            <button className={'button'} onClick={handleShow}>
                Search History
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Search History</Modal.Title>
                    <Button variant={'outline-danger'} onClick={handleClearHistory}>Clear History
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <p>Click on history query link to perform the search again.</p>
                    <Table>
                        <thead>
                        <tr>
                            <th>Search History query</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {searchHistory.map((search, key) => (
                            <tr key={key}>
                                <td><Link onClick={handleLinkClick} to={'#'} id={search}>{search}</Link></td>
                                <td><Button variant={'danger'} id={key} onClick={handleDeleteItem}
                                >X</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SearchHistory;