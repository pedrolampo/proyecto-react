import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import { getSingleProd } from '../../services/Firebase/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { prodId } = useParams();

    useEffect(() => {
        getSingleProd(prodId)
            .then((prod) => {
                setProduct(prod);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {
            setProduct();
        };
    }, [prodId]);

    return (
        <section className="itemDetailContainer">
            <ItemDetail item={product} />
        </section>
    );
};

export default ItemDetailContainer;
