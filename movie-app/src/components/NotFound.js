import {Link} from "react-router-dom";

/**
 * Not found page component - displays not found page
 *
 * @param props - props.msg is the message to be displayed
 * @returns {JSX.Element}
 */
export default function NotFound(props) {
    return (
        <>
            <h1>Page not found!</h1>
            {props.msg && <h5>{props.msg}</h5>}
            <Link to={"/"}>
                <button className='button'>Go to home page</button>
            </Link>
        </>
    )
}