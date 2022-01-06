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
import UserContext from '../../context/UserContext';

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false);
    const { itemsInCart, clearCart, removeProd, getTotal } =
        useContext(CartContext);
    const { contact, setContact, showForm, setShowForm, clearContact } =
        useContext(ContactContext);
    const { setNotification } = useContext(NotificationContext);
    const { user } = useContext(UserContext);

    const confirmOrder = () => {
        if (Object.keys(contact).length > 0) {
            let userId = window.localStorage.getItem('user');
            let parsedUserId = JSON.parse(userId);

            const itemsPurchased = {
                buyer: contact.name,
                items: itemsInCart,
                total: getTotal(),
                phone: contact.phone,
                adress: contact.adress,
                comment: contact.message,
                email: contact.email,
                paymentMethod: contact.paymentMethod,
                date: Timestamp.fromDate(new Date()),
                userID: parsedUserId.uid,
                status: 'Esperando confirmación del pago',
            };

            const batch = writeBatch(db);
            const outOfStock = [];

            if (
                itemsPurchased.buyer.length &&
                itemsPurchased.phone.length &&
                itemsPurchased.adress.length &&
                itemsPurchased.email.length &&
                itemsPurchased.paymentMethod !== ''
            ) {
                itemsPurchased.items.forEach((e) => {
                    setProcessingOrder(true);
                    getDoc(doc(db, 'products', e.id)).then((docSnapshot) => {
                        if (docSnapshot.data().stock >= e.inCart) {
                            batch.update(doc(db, 'products', docSnapshot.id), {
                                stock: docSnapshot.data().stock - e.inCart,
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
                    addDoc(collection(db, 'orders'), itemsPurchased)
                        .then(({ id }) => {
                            batch.commit().then(() => {
                                setNotification(
                                    'success',
                                    `Muchas gracias por tu compra!
                                    Tú ID de compra es ${id}.`
                                );
                            });
                        })
                        .catch((error) => {
                            setNotification(
                                'error',
                                `Error al procesar la compra: ${error}.`
                            );
                        })
                        .finally(() => {
                            setProcessingOrder(false);
                            clearCart();
                            clearContact();
                        });
                } else
                    setNotification(
                        'error',
                        'Parece que hubo un error, por favor inténtalo más tarde.'
                    );
            } else setNotification('error', 'Faltan campos por rellenar.');
        } else
            setNotification(
                'error',
                'Por favor rellena los datos de contacto faltantes.'
            );
    };

    const contactInfoLoaded = () => {
        if (Object.keys(contact).length > 0) {
            return (
                <>
                    <div className="contactInfo">
                        <p>Nombre: {contact.name}</p>
                        <p>Dirección: {contact.adress}</p>
                        <p>Nº de teléfono: {contact.phone}</p>
                        <p>E-Mail: {contact.email}</p>
                        <p>Método de Pago: {contact.paymentMethod}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setContact({});
                                setShowForm(true);
                            }}
                            className="button twoLine"
                        >
                            Editar info de contacto
                        </button>
                        <button
                            onClick={() => {
                                setContact({});
                            }}
                            className="button twoLine"
                        >
                            Borrar info de contacto
                        </button>
                    </div>
                </>
            );
        } else
            return (
                <button
                    onClick={() => {
                        setShowForm(true);
                    }}
                    className="button"
                >
                    Cargar Info
                </button>
            );
    };

    if (processingOrder) {
        return <h1>Se está procesando su orden...</h1>;
    }

    const cartButtons = () => {
        const totalProdPrice = (prod) => {
            if (prod.inCart === 0) {
                return prod.price;
            } else {
                return prod.price * prod.inCart;
            }
        };

        if (user) {
            if (Object.keys(itemsInCart).length > 0) {
                return (
                    <div className="cartContainer">
                        {itemsInCart.map((prod) => (
                            <div className="productContainer" key={prod.id}>
                                <img src={prod.image} alt={prod.name} />
                                <div className="infoContainer">
                                    <h2>{prod.name}</h2>
                                    <div className="prodInfo">
                                        <p>Precio individual: ${prod.price}</p>
                                        <p>Subtotal: ${totalProdPrice(prod)}</p>
                                    </div>
                                </div>
                                <button
                                    className="button deleteButton"
                                    onClick={() => removeProd(prod.id)}
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
                            {contactInfoLoaded()}
                            <button
                                className="button"
                                onClick={() => confirmOrder()}
                            >
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
        } else return <h1>Necesitas estar logueado para ver el carrito.</h1>;
    };

    return (
        <>
            <h1 className="cartTitle">Tu carrito</h1>
            {cartButtons()}
        </>
    );
};

export default Cart;
