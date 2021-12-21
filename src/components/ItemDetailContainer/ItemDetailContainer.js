import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import { db } from '../../services/Firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { prodId } = useParams();

    useEffect(() => {
        getDoc(doc(db, 'products', prodId))
            .then((querySnapshot) => {
                const product = {
                    id: querySnapshot.id,
                    ...querySnapshot.data(),
                };
                setProduct(product);
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
