import {Col, Row} from "react-bootstrap";

/**
 * Page navigation component - displays page navigation buttons
 * @param pageNumber
 * @param setPageNumber
 * @returns {JSX.Element}
 * @constructor
 */
export const PageNavigation = ({pageNumber, setPageNumber}) => {
    return (
        <Row>
            <Col>
                <button className='button' onClick={() => {
                    if (pageNumber > 1)
                        setPageNumber(pageNumber - 1)
                }}>Prev page
                </button>
                <button className='button' onClick={() => setPageNumber(pageNumber + 1)}>Next page</button>
            </Col>
        </Row>
    )
}