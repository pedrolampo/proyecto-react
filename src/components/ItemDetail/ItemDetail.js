import './ItemDetail.css';
import ItemCount from '../Card/ItemCounter';
import ColorPicker from '../ColorPicker/ColorPicker';

const ItemDetail = ({ item }) => {
    if (item) {
        return (
            <div className="itemDetail">
                <img src={item?.image} alt={item?.name} />
                <div>
                    <h2>{item?.name}</h2>
                    <b>${item?.price}</b>
                    <p>{item?.description}</p>
                </div>
                <div>
                    <ColorPicker />
                    <ItemCount stock={item?.stock} />
                </div>
            </div>
        );
    } else return <p className="loading">Cargando...</p>;
};

export default ItemDetail;
