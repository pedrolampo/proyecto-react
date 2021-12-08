import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Card from '../Card/Card';
import { getAllProducts } from '../ItemList/products';

const ItemListContainer = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const list = getAllProducts();

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
