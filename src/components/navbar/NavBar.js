import logo from '../../logo.svg';
import LogInButton from '../LogInButton/LogInButton';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <a href="../../public/index.html">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <div className="navBarList">
                    <ul>
                        <li>
                            <a href="../../public/index.html">HOME</a>
                        </li>
                        <li className="subMenu">
                            <a href="../../public/index.html">SHOP</a>
                            <ul className="dropDownMenu">
                                <li>
                                    <a href="../../public/index.html">
                                        Placeholder
                                    </a>
                                </li>
                                <li>
                                    <a href="../../public/index.html">
                                        Placeholder
                                    </a>
                                </li>
                                <li>
                                    <a href="../../public/index.html">
                                        Placeholder
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="../../public/index.html">CONTACT</a>
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
