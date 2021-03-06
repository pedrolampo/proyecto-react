import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './ItemListContainer.css';
import { getProds } from '../../services/Firebase/firebase';
import Categories from './Categories';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { catId } = useParams();

    useEffect(() => {
        getProds('category', '==', catId)
            .then((products) => {
                setProducts(products);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {
            setProducts([]);
        };
    }, [catId]);

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
