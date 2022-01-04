import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './ItemListContainer.css';
import { db } from '../../services/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Categories from './Categories';

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
                <Categories />
            </section>
            <section className="productsList">
                {conditionalProds(products)}
            </section>
        </section>
    );
};

export default ItemListContainer;
