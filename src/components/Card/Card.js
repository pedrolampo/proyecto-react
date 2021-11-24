import { useState } from 'react';
import './Card.css';

const stock = 8;

const ItemCount = () => {
    const [count, setCount] = useState(1);

    const less = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    };

    const stockLimit = () => {
        if (count >= stock) {
            return;
        }
        setCount(count + 1);
    };

    return (
        <div className="countContainer">
            <button
                className="buttonLeft"
                onClick={() => less()}
                disabled={stock === 0 ? 'disabled' : null}
            >
                -
            </button>
            <p className="itemCountInput" onChange={() => {}}>
                {count}
            </p>
            <button
                className="buttonRight"
                onClick={() => stockLimit()}
                disabled={stock === 0 ? 'disabled' : null}
            >
                +
            </button>
        </div>
    );
};

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="itemPhoto" />
            <div className="itemTitle">
                <b>{props.item}</b>
                <p>{props.price}</p>
            </div>
            <div className="amountPurchase">
                <ItemCount />
                <button
                    className="addToCartButton"
                    disabled={stock === 0 ? 'disabled' : null}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Card;
