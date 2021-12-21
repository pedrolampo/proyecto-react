import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';
import { db } from '../../services/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'products'))
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProducts(products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const conditionalProds = (prods) => {
        if (prods.length > 0) {
            return <Card items={products} />;
        } else return <p className="loading">Cargando...</p>;
    };

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
                {conditionalProds(products)}
            </section>
        </section>
    );
};

export default ItemListContainer;
