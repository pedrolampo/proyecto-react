import getItems from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const list = getItems();

        list.then((resp) => {
            setProducts(resp);
        });
    }, []);

    return (
        <section className="itemDetailContainer">
            <ItemDetail item={products} />
        </section>
    );
};

export default ItemDetailContainer;
