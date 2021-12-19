import cartIcon from './cartIcon.png';
import './CartIcon.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cartQty } = useContext(CartContext);

    return (
        <div className="cartIconContainer">
            <div>
                <img src={cartIcon} alt="cart icon" />
                <span>{cartQty}</span>
            </div>
        </div>
    );
};

export default CartWidget;
