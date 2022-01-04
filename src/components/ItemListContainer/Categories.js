import { Link } from 'react-router-dom';
import './ItemListContainer.css';

const Categories = () => {
    return (
        <div className="floatMenu">
            <h2>CATEGORÍAS</h2>
            <ul className="categoriesList">
                <Link to={'/category/guitars'}>
                    <li>- Guitarras</li>
                </Link>
                <Link to={'/category/bass'}>
                    <li>- Bajos</li>
                </Link>
                <Link to={'/category/pianos'}>
                    <li>- Teclados</li>
                </Link>
                <Link to={'/category/drums'}>
                    <li>- Baterías</li>
                </Link>
            </ul>
        </div>
    );
};

export default Categories;
