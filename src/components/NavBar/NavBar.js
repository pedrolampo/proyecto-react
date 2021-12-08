import logo from '../../logo.svg';
import LogInButton from '../LogInButton/LogInButton';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
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
                            <a href="/#">CATEGORÍAS</a>
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
                <div className="login">
                    <LogInButton label="LogIn" />
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
