import {Link} from "react-router-dom";

/**
 * Purchase complete component - displays purchase complete page
 *
 * @returns {JSX.Element}
 */
const PurchaseComplete = () => {
    return (
        <div style={{marginTop: "10px"}}>
            <h1 className='home-title'>Purchase Completed</h1>
            <p>Thank you for your purchase!</p>
            <Link to={'/'}>
                <button className='button'>Back to Home page</button>
            </Link>
        </div>
    )
}

export default PurchaseComplete;