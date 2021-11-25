import { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(1);

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

    return (
        <div className="countContainer">
            <button
                className="buttonLeft"
                onClick={() => less()}
                disabled={props.stock === 0 ? 'disabled' : null}
            >
                -
            </button>
            <p className="itemCountInput" onChange={() => {}}>
                {count}
            </p>
            <button
                className="buttonRight"
                onClick={() => stockLimit()}
                disabled={props.stock === 0 ? 'disabled' : null}
            >
                +
            </button>
        </div>
    );
};

export default ItemCount;
