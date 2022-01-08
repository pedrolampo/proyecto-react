import { addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react/cjs/react.development';
import { NotificationContext } from '../../context/NotificationContext';
import { db } from '../../services/Firebase/firebase';
import { emailCheck } from '../Cart/PurchaseForm';
import './Contact.css';

const Contact = () => {
    const { setNotification } = useContext(NotificationContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const contactInfo = document.querySelectorAll('.contactInfo');
        let validEmail = emailCheck(contactInfo[1].value);

        if (
            contactInfo[0].value.length &&
            contactInfo[1].value.length &&
            contactInfo[2].value.length &&
            validEmail
        ) {
            const message = {
                name: contactInfo[0].value,
                email: contactInfo[1].value,
                message: contactInfo[2].value,
            };
            addDoc(collection(db, 'contact'), message)
                .then(() => {
                    setNotification(
                        'success',
                        'Gracias por tu mensaje. Recibirás una respuesta dentro de las proximas 24 horas.'
                    );
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                });
        } else
            setNotification(
                'error',
                'Por favor revisa los datos y vuelve a intentarlo.'
            );
    };

    return (
        <div className="contactForm">
            <h2>¿Quieres saber más sobre nosotros?</h2>
            <h3>¿O quieres saber más sobre nuestros productos?</h3>
            <h2>¡Contactanos y te respondemos a tu email!</h2>
            <form onSubmit={handleSubmit}>
                <label>Tu nombre:</label>
                <input className="contactInfo" type="text" />
                <label>Tu email:</label>
                <input className="contactInfo" type="text" />
                <label>Mensaje o consulta:</label>
                <textarea className="contactMessage contactInfo" />
                <button className="button" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;
