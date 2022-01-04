import { Link } from 'react-router-dom';
import './ItemListContainer.css';

const Categories = () => {
    return (
        <div className="floatMenu">
            <h2>CATEGORÍAS</h2>
            <ul className="categoriesList">
                <Link to={'/category/remeras'}>
                    <li>- Remeras</li>
                </Link>
                <Link to={'/category/tazas'}>
                    <li>- Tazas</li>
                </Link>
                <Link to={'/category/otro'}>
                    <li>- Otro</li>
                </Link>
            </ul>
        </div>
    );
};

export default Categories;
