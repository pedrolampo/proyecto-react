import { useContext } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import UserContext from '../../context/UserContext';
import { NotificationContext } from '../../context/NotificationContext';

const NavBar = () => {
    const { user, logout } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);

    const handleLogout = () => {
        logout();
        setNotification('error', `Hasta luego!`);
    };

    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <div className="navBarList">
                    <ul>
                        <li>
                            <Link to={'/'}>HOME</Link>
                        </li>
                        <li className="subMenu">
                            <Link to={'/'}>CATEGORÍAS</Link>
                            <ul className="dropDownMenu">
                                <li>
                                    <Link to={'/category/remeras'}>
                                        Remeras
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/category/tazas'}>Tazas</Link>
                                </li>
                                <li>
                                    <Link to={'/category/otro'}>Otro</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={'/contact'}>CONTACTO</Link>
                        </li>
                    </ul>
                </div>
                <div className="cartWidget">
                    <Link to={'/cart'}>
                        <CartWidget />
                    </Link>
                    {user ? (
                        <button className="login" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <button className="login">
                            <Link to={'/login'}>Login</Link>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
