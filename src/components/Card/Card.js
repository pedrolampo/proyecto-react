import './Card.css';
import { Link } from 'react-router-dom';

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
                            <button className="detail">Ver más</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
