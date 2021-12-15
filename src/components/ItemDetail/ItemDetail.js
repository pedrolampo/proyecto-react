import './ItemDetail.css';
import ItemCount from '../Card/ItemCounter';
import ColorPicker from '../ColorPicker/ColorPicker';
import { useContext } from 'react';
import { TestContext } from '../Context/CartContext';

const ItemDetail = ({ item }) => {
    const value = useContext(TestContext);
    console.log(value);

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
