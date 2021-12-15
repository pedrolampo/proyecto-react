import cartIcon from './cartIcon.png';
import './CartIcon.css';

const CartWidget = () => {
    return (
        <div className="cartIconContainer">
            <div>
                <img src={cartIcon} alt="cart icon" />
                <span>0</span>
            </div>
        </div>
    );
};

export default CartWidget;
