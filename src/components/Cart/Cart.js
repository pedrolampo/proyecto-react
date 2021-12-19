import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { itemsInCart, clearCart, removeProd } = useContext(CartContext);
    console.log(itemsInCart);

    const cartButtons = () => {
        if (itemsInCart) {
            return (
                <>
                    <button onClick={clearCart}>Clear Cart</button>
                    <button onClick={removeProd}>
                        Eliminar primer elmento
                    </button>
                </>
            );
        } else return 'Su carrito está vacío';
    };

    return (
        <>
            <h1>Carrito</h1>
            {cartButtons()}
        </>
    );
};

export default Cart;
