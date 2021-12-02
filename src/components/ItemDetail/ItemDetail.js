import './ItemDetail.css';
import ItemCount from '../Card/ItemCounter';
import ColorPicker from '../ColorPicker/ColorPicker';

const ItemDetail = ({ item }) => {
    const prod = item[3];

    return (
        <div className="itemDetail">
            <img src={prod.image} alt={prod.name} />
            <div>
                <h2>{prod.name}</h2>
                <b>${prod.price}</b>
                <p>{prod.description}</p>
            </div>
            <div>
                <ColorPicker />
                <ItemCount stock={prod.stock} />
            </div>
        </div>
    );
};

export default ItemDetail;
