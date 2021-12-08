import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProdByCategory } from '../ItemList/products';
import CategoriesListed from '../CategoriesListed/CategoriesListed';

const CategoriesContainer = () => {
    const [prods, setProds] = useState();
    const { catId } = useParams();

    useEffect(() => {
        getProdByCategory(catId)
            .then((items) => {
                setProds(items);
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
