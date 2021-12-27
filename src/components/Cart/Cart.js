import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const purchase = { 
    buyer: {name: 'jorge', phone: 314314, email: 'hola@hola.com'},
    items: [{id: 1, name: 1, price: 300}],
    total, 
};

const Cart = () => {
    const { itemsInCart, clearCart, removeProd } = useContext(CartContext);
    const [dummyState, setDummyState] = useState(0);

    const cartButtons = () => {
        const dummyStateCounter = (id) => {
            setDummyState(dummyState + 1);
            removeProd(id);
        };

        const totalProdPrice = (prod) => {
            if (prod.inCart === 0) {
                return prod.price;
            } else {
                return prod.price * prod.inCart;
            }
        };

        if (Object.keys(itemsInCart).length > 0) {
            return (
                <div className="cartContainer">
                    <button className="button" onClick={clearCart}>
                        Clear Cart
                    </button>
                    {itemsInCart.map((prod) => (
                        <div className="productContainer" key={prod.id}>
                            <img src={prod.image} alt={prod.name} />
                            <div className="infoContainer">
                                <h2>{prod.name}</h2>
                                <p>
                                    Precio total del producto: $
                                    {totalProdPrice(prod)}
                                </p>
                            </div>
                            <button
                                className="button"
                                onClick={() => dummyStateCounter(prod.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            );
        } else
            return (
                <div className="emptyCartContainer">
                    <p className="emptyCart">Tú carrito está vacío</p>
                    <Link className="backToShop" to={'/'}>
                        Haz click aquí para seguir comprando
                    </Link>
                </div>
            );
    };

    return (
        <>
            <h1 className="cartTitle">Tú carrito</h1>
            {cartButtons()}
        </>
    );
};

export default Cart;
