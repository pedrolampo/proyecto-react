import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const CategoriesListed = ({ prods }) => {
    if (prods) {
        return (
            <div className="cardsContainer">
                <Card items={prods} />
            </div>
        );
    } else return <p>Cargando...</p>;
};

export default CategoriesListed;
