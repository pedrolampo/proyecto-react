import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = (props) => {
    const [count, setCount] = useState(1);
    const [cartQty, setCartQty] = useState(0);

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

    const addToCart = () => {
        if (cartQty === 0) {
            setCartQty(count);
            console.log(count);
        } else {
            setCartQty(cartQty + count);
        }
    };

    const replaceCounter = () => {
        if (cartQty === 0) {
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
                        <button onClick={() => addToCart()}>
                            Agregar al carrito
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
