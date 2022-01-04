import { useContext } from 'react';
import { ContactContext } from '../../context/Contact';
import './PurchaseForm.css';
import { NotificationContext } from '../../context/NotificationContext';

const PurchaseForm = () => {
    const { setContact, setShowForm, submitError } = useContext(ContactContext);
    const { setNotification } = useContext(NotificationContext);

    const submitContactInfo = (e) => {
        e.preventDefault();
        let contactInfo = document.querySelectorAll('.formInput');

        const emailCheck = () => {
            if (contactInfo[3].value.length) {
                if (
                    contactInfo[3].value.includes('@') &&
                    contactInfo[3].value.includes('.com')
                ) {
                    return true;
                }
            }
        };
        let hasAtSign = emailCheck();

        if (
            contactInfo[0].value.length &&
            contactInfo[1].value.length &&
            contactInfo[2].value.length &&
            contactInfo[3].value.length &&
            contactInfo[5].value !== '' &&
            hasAtSign
        ) {
            setContact({
                name: contactInfo[0].value,
                adress: contactInfo[1].value,
                phone: contactInfo[2].value,
                email: contactInfo[3].value,
                message: contactInfo[4].value,
                paymentMethod: contactInfo[5].value,
            });
            setShowForm(false);
            submitError();
        } else
            setNotification(
                'error',
                'Faltan campos por rellenar, o algunos no son correctos.'
            );
    };

    return (
        <form>
            <label htmlFor="name">*Nombre completo:</label>
            <br />
            <input className="formInput" id="name" type="text" />
            <br />
            <label htmlFor="adress">*Dirección:</label>
            <br />
            <input className="formInput" id="adress" type="text" />
            <br />
            <label htmlFor="phoneNumber">*Nº de teléfono:</label>
            <br />
            <input className="formInput" id="phoneNumber" type="number" />
            <br />
            <label htmlFor="email">*E-Mail:</label>
            <br />
            <input className="formInput" id="email" />
            <br />
            <label htmlFor="message">Comentario:</label>
            <br />
            <input className="formInput" id="message" type="text" />
            <br />
            <label htmlFor="paymentMethod">*Seleccione método de pago:</label>
            <br />
            <select className="formInput" id="paymentMethod">
                <option default></option>
                <option>Transferencia Bancaria</option>
                <option>Efectivo</option>
            </select>
            <p className="requiredFields">* Campos obligatorios</p>
            <div className="finishButtons">
                <button
                    className="button"
                    onClick={() => {
                        setShowForm(false);
                    }}
                >
                    Cancelar
                </button>
                <button
                    className="button"
                    onClick={(e) => {
                        submitContactInfo(e);
                    }}
                >
                    Cargar
                </button>
            </div>
        </form>
    );
};

export default PurchaseForm;
