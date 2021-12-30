import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ContactContext } from '../../context/Contact';
import PurchaseForm from './PurchaseForm';
import {
    addDoc,
    collection,
    doc,
    getDoc,
    Timestamp,
    writeBatch,
} from 'firebase/firestore';
import { db } from '../../services/Firebase/firebase';
import { NotificationContext } from '../../context/NotificationContext';
import './Cart.css';

const Cart = () => {
    const { itemsInCart, clearCart, removeProd, getTotal } =
        useContext(CartContext);
    const { contact, showForm, setShowForm } = useContext(ContactContext);
    const { setNotification } = useContext(NotificationContext);
    const [dummyState, setDummyState] = useState(0);

    const confirmOrder = () => {
        if (Object.keys(contact).length > 0) {
            const batch = writeBatch(db);
            const outOfStock = [];
            const itemsPurchased = {
                buyer: contact.name,
                items: itemsInCart,
                total: getTotal(),
                phone: contact.phone,
                adress: contact.adress,
                comment: contact.message,
                email: contact.email,
                date: Timestamp.fromDate(new Date()),
            };

            if (
                itemsPurchased.buyer.length &&
                itemsPurchased.phone.length &&
                itemsPurchased.adress.length &&
                itemsPurchased.email.length
            ) {
                itemsPurchased.items.forEach((e) => {
                    getDoc(doc(db, 'products', e.id)).then((docSnapshot) => {
                        if (docSnapshot.data().stock >= e.quantity) {
                            batch.update(doc(db, 'items', docSnapshot.id), {
                                stock: docSnapshot.data().stock - e.quantity,
                            });
                        } else {
                            outOfStock.push({
                                id: docSnapshot.id,
                                ...docSnapshot.data(),
                            });
                        }
                    });
                });

                if (outOfStock.length === 0) {
                    addDoc(collection(db, 'orders'), itemsPurchased).then(
                        ({ id }) => {
                            batch.commit().then(() => {
                                setNotification(
                                    'success',
                                    `Muchas gracias por tu compra!
                                    Tú ID de compra es ${id}.`
                                );
                            });
                        }
                    );
                }
            } else setNotification('error', 'Faltan campos por rellenar');
        } else
            setNotification('error', 'Por favor rellena los datos de contacto');
    };

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
                    {itemsInCart.map((prod) => (
                        <div className="productContainer" key={prod.id}>
                            <img src={prod.image} alt={prod.name} />
                            <div className="infoContainer">
                                <h2>{prod.name}</h2>
                                <div>
                                    <p>Precio individual: ${prod.price}</p>
                                    <p>Subtotal: ${totalProdPrice(prod)}</p>
                                </div>
                            </div>
                            <button
                                className="button"
                                onClick={() => dummyStateCounter(prod.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <h2 className="totalCost">Total: ${getTotal()}</h2>
                    <div>
                        <button className="button" onClick={clearCart}>
                            Clear Cart
                        </button>
                        <button
                            onClick={() => {
                                setShowForm(true);
                            }}
                        >
                            Cargar Info
                        </button>
                        <button onClick={() => confirmOrder()}>
                            Confirmar Compra
                        </button>
                    </div>
                    {showForm === false ? null : <PurchaseForm />}
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
