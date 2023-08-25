import "./style/cart.css"


/**
 * Shopping cart table component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const CartTable = (props) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Release date</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {props.data.map((item, index) => (
                    <tr className={'cart-item'} key={index}>
                        <td><img src={`https://image.tmdb.org/t/p/w300/${item.img}`} alt={item.id}/></td>
                        <td className='movie_name'>{item.title}</td>
                        <td>{item.releaseDate}</td>
                        <td>{item.count}</td>
                        <td>{(3.99 * item.count).toFixed(2)}$</td>
                        <td>
                            <button id={item.id} className='button delete' onClick={props.handleDeleteItem}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};