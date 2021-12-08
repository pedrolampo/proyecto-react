import Card from '../Card/Card';
import '../ItemDetail/ItemDetail.css';

const CategoriesListed = ({ prods }) => {
    if (prods) {
        return (
            <div className="cardsContainer">
                <Card items={prods} />
            </div>
        );
    } else return <p className="loading">Cargando...</p>;
};

export default CategoriesListed;
