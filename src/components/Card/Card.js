import './Card.css';
import { Link } from 'react-router-dom';

export const PurchaseButton = ({ stock }) => {
    const isThereStock = () => {
        if (stock === 0) {
            return 'Sin stock';
        } else return 'Ver más';
    };

    return (
        <button
            className="addToCartButton"
            disabled={stock === 0 ? 'disabled' : null}
        >
            {isThereStock()}
        </button>
    );
};

const Card = ({ items }) => {
    return (
        <div className="cardsContainer">
            {items.map((i) => (
                <div className="card" key={i.id}>
                    <img src={i.image} alt={i.name} />
                    <div className="itemTitle">
                        <b>{i.name}</b>
                        <p>${i.price}</p>
                    </div>
                    <div className="amountPurchase">
                        <Link to={`/item/${i.id}`}>
                            <button className="addToCartButton">Ver más</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
