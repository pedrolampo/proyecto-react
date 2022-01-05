import { useContext } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import UserContext from '../../context/UserContext';
import { NotificationContext } from '../../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { user, logout } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);
    const navigation = useNavigate();

    const handleLogout = () => {
        logout();
        setNotification('error', `Gracias por visitarnos!`);
        navigation('/');
    };

    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <div className="navBarList">
                    <ul>
                        <li className="mainButtons">
                            <Link to={'/'}>HOME</Link>
                        </li>
                        <li className="subMenu mainButtons">
                            <Link to={'/'}>CATEGORÍAS</Link>
                            <ul className="dropDownMenu">
                                <li>
                                    <Link to={'/category/guitars'}>
                                        Guitarras
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/category/bass'}>Bajos</Link>
                                </li>
                                <li>
                                    <Link to={'/category/pianos'}>
                                        Teclados
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/category/drums'}>Baterías</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="mainButtons">
                            <Link to={'/contact'}>CONTACTO</Link>
                        </li>
                    </ul>
                </div>
                <div className="cartWidget">
                    {user ? (
                        <div className="myAccount mainButtons">
                            MI CUENTA
                            <ul className="accountDropDown">
                                <li>
                                    <Link to={'/myAccount'}>MIS COMPRAS</Link>
                                </li>
                                <li>
                                    <p onClick={handleLogout}>SALIR</p>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <button className="login mainButtons">
                            <Link to={'/login'}>Login</Link>
                        </button>
                    )}
                    <Link to={'/cart'}>
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
