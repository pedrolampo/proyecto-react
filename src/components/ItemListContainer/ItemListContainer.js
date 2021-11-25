import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Card from '../Card/Card';
import getItems from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const list = getItems();

        list.then((reponse) => {
            setProduct(reponse);
        });
    }, []);

    return (
        <section className="shopItems">
            <Card items={product} />
        </section>
    );
};

export default ItemListContainer;
