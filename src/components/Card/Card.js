import { useState } from 'react';
import './Card.css';

const ItemCount = () => {
    const [count, setCount] = useState(1);
    const stock = 17;

    const less = () => {
        if (count === 1) {
            alert('No se puede menos de 1');
            return;
        }
        setCount(count - 1);
    };

    return (
        <div className="countContainer">
            <button
                onClick={() => less()}
                disabled={count === 1 ? 'disabled' : null}
                className="Restar buttonLeft"
            >
                -
            </button>
            <input className="itemCountInput" type="number" value={count} />
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
