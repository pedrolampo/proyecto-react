import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CategoriesListed from '../CategoriesListed/CategoriesListed';
import { db } from '../../services/Firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const CategoriesContainer = () => {
    const [prods, setProds] = useState();
    const { catId } = useParams();

    useEffect(() => {
        getDocs(
            query(collection(db, 'products'), where('category', '==', catId))
        )
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProds(products);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {
            setProds();
        };
    }, [catId]);

    return (
        <div className="categoriesContainer">
            <CategoriesListed prods={prods} />
        </div>
    );
};

export default CategoriesContainer;
