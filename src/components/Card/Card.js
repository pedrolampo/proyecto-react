import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="itemPhoto" />
            <div>
                <b>Item 1</b>
                <p>$500</p>
                <button>COMPRAR</button>
            </div>
        </div>
    );
};

export default Card;
