import cartIcon from './cartIcon.png';
import './CartIcon.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cartQty } = useContext(CartContext);

    const showAmount = () => {
        if (cartQty === 0) {
            return;
        } else return <span>{cartQty}</span>;
    };

    return (
        <div className="cartIconContainer">
            <div>
                <img src={cartIcon} alt="cart icon" />
                {showAmount()}
            </div>
        </div>
    );
};

export default CartWidget;
