import './ItemDetail.css';
import ItemCount from '../Card/ItemCounter';
import ColorPicker from '../ColorPicker/ColorPicker';

const ItemDetail = ({ item }) => {
    if (item.length > 0) {
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
    } else {
        return (
            <>
                <h1>CARGANDO</h1>
                <img
                    src="https://cdn.dribbble.com/users/731859/screenshots/1947177/duck_walk.gif"
                    alt="cargando"
                    style={{ width: '40em' }}
                />
            </>
        );
    }
};

export default ItemDetail;
