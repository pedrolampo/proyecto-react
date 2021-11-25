import './Card.css';
import ItemCount from '../Card/ItemCounter';

const PurchaseButton = ({ stock }) => {
    const isThereStock = () => {
        if (stock === 0) {
            return 'No queda stock';
        } else return 'Agregar al carrito';
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
                        <ItemCount stock={i.stock} />
                        <PurchaseButton stock={i.stock} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
