import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { getAllProducts } from '../Products/products';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

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
            <ul className="categoriesMenu">
                <li>
                    <Link to={'/category/remeras'}>Remeras</Link>
                </li>
                <li>
                    <Link to={'/category/tazas'}>Tazas</Link>
                </li>
                <li>
                    <Link to={'/category/otro'}>Otro</Link>
                </li>
            </ul>
            <Card items={product} />
        </section>
    );
};

export default ItemListContainer;
