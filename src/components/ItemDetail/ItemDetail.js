import { useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../Card/ItemCounter';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const { addItemsToCart } = useContext(CartContext);

    const addToCart = (qty) => {
        item.inCart = qty;
        addItemsToCart(item);
    };

    if (item) {
        return (
            <div className="itemDetail">
                <img src={item.image} alt={item.name} />
                <div className="description">
                    <h2>{item.name}</h2>
                    <b>${item.price}</b>
                    <p>{item.description}</p>
                </div>
                <div className="itemCounterContainer">
                    <ItemCount stock={item.stock} addToCart={addToCart} />
                </div>
            </div>
        );
    } else return <p className="loading">Cargando...</p>;
};

export default ItemDetail;
