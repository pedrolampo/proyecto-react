import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../Products/products';
import { useParams } from 'react-router';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProducts] = useState();
    const { prodId } = useParams();

    useEffect(() => {
        getProductById(prodId)
            .then((i) => {
                setProducts(i);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {
            setProducts();
        };
    }, [prodId]);

    return (
        <section className="itemDetailContainer">
            <ItemDetail item={product} />
        </section>
    );
};

export default ItemDetailContainer;
