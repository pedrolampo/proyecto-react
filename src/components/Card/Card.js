import { useState } from 'react';
import './Card.css';

const ItemCount = () => {
    const [count, setCount] = useState(1);
    const stock = 17;

    const neverNegative = () => {
        if (count >= 0) {
            setCount(1);
        }
    };

    return (
        <div className="countContainer">
            <button className="buttonLeft" onClick={() => setCount(count - 1)}>
                -
            </button>
            <input
                className="itemCountInput"
                type="number"
                onChange={() => neverNegative}
                value={count}
            />
            <button className="buttonRight" onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
};

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="itemPhoto" />
            <div>
                <b>Item 1</b>
                <p>$500</p>
                <ItemCount />
                <button className="addToCartButton">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Card;
