import cartIcon from './cartIcon.png';
import './CartIcon.css';

const CartWidget = () => {
    return (
        <div className="cartIconContainer">
            <a href="/#">
                <img src={cartIcon} alt="cart icon" />
                <span>0</span>
            </a>
        </div>
    );
};

export default CartWidget;
