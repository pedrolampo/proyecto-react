import logo from '../../logo.svg';
import LogInButton from '../LogInButton/LogInButton';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <a href="/#">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <div className="navBarList">
                    <ul>
                        <li>
                            <a href="/#">HOME</a>
                        </li>
                        <li className="subMenu">
                            <a href="/#">SHOP</a>
                            <ul className="dropDownMenu">
                                <li>
                                    <a href="/#">Placeholder</a>
                                </li>
                                <li>
                                    <a href="/#">Placeholder</a>
                                </li>
                                <li>
                                    <a href="/#">Placeholder</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/#">CONTACT</a>
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
