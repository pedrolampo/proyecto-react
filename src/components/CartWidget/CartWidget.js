import cartIcon from './cartIcon.png';
import './CartIcon.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    let count = cartQuantity();

    return (
        <div className="cartIconContainer">
            <div>
                <img src={cartIcon} alt="cart icon" />
                {count === 0 ? null : count}
            </div>
        </div>
    );
};

export default CartWidget;
