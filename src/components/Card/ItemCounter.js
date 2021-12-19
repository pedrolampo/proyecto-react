import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = (props) => {
    const [count, setCount] = useState(1);
    const [inCart, setInCart] = useState(0);

    const less = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    };

    const stockLimit = () => {
        if (count >= props.stock) {
            return;
        }
        setCount(count + 1);
    };

    const handleAddToCart = (count) => {
        setInCart(count);
        props.addToCart(count);
    };

    const noStock = (stock) => {
        if (stock === 0) {
            return 'Sin stock';
        } else return 'Agregar al carrito';
    };

    const replaceCounter = () => {
        if (inCart === 0) {
            return (
                <>
                    <div className="countContainer">
                        <button
                            className="buttonLeft"
                            onClick={() => less()}
                            disabled={props.stock === 0 ? 'disabled' : null}
                        >
                            -
                        </button>
                        <p className="itemCountInput">{count}</p>
                        <button
                            className="buttonRight"
                            onClick={() => stockLimit()}
                            disabled={props.stock === 0 ? 'disabled' : null}
                        >
                            +
                        </button>
                    </div>
                    <div className="purchaseButton">
                        <button
                            onClick={() => handleAddToCart(count)}
                            disabled={props.stock === 0 ? 'disabled' : null}
                        >
                            {noStock(props.stock)}
                        </button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="purchaseButton">
                        <Link to={'/cart'}>
                            <button>Ir al carrito</button>
                        </Link>
                    </div>
                </>
            );
        }
    };

    return <div>{replaceCounter()}</div>;
};

export default ItemCount;
