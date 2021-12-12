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
            <section className="categoriesMenu">
                <div className="floatMenu">
                    <h2>CATEGORÍAS</h2>
                    <ul className="categoriesList">
                        <Link to={'/category/remeras'}>
                            <li>- Remeras</li>
                        </Link>
                        <Link to={'/category/tazas'}>
                            <li>- Tazas</li>
                        </Link>
                        <Link to={'/category/otro'}>
                            <li>- Otro</li>
                        </Link>
                    </ul>
                </div>
            </section>
            <section className="productsList">
                <Card items={product} />
            </section>
        </section>
    );
};

export default ItemListContainer;
