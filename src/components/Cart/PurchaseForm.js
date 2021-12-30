import { useContext } from 'react';
import { ContactContext } from '../../context/Contact';
import './PurchaseForm.css';

const PurchaseForm = () => {
    const { setContact, setShowForm, submitError } = useContext(ContactContext);

    const submitContactInfo = (e) => {
        e.preventDefault();
        let contactInfo = document.querySelectorAll('.formInput');
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
    };

    return (
        <form>
            <label htmlFor="name">Nombre completo:</label>
            <br />
            <input className="formInput" id="name" type="text"></input>
            <br />
            <label htmlFor="adress">Dirección:</label>
            <br />
            <input className="formInput" id="adress" type="text"></input>
            <br />
            <label htmlFor="phoneNumber">Nº de teléfono:</label>
            <br />
            <input className="formInput" id="phoneNumber" type="number"></input>
            <br />
            <label htmlFor="email">E-Mail:</label>
            <br />
            <input className="formInput" id="email"></input>
            <br />
            <label htmlFor="message">Comentario:</label>
            <br />
            <input className="formInput" id="message" type="text"></input>
            <br />
            <label htmlFor="paymentMethod">Seleccione método de pago:</label>
            <br />
            <select className="formInput" id="paymentMethod">
                <option default></option>
                <option>Transeferencia Bancaria</option>
                <option>Efectivo</option>
            </select>
            <button
                onClick={(e) => {
                    submitContactInfo(e);
                }}
            >
                Cargar
            </button>
        </form>
    );
};

export default PurchaseForm;
