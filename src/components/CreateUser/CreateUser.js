import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { NotificationContext } from '../../context/NotificationContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../services/Firebase/firebase';
import './CreateUser.css';

const CreateUser = () => {
    const { setNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let accountInfo = document.querySelectorAll('.createAccInput');
        const auth = getAuth();

        const emailCheck = () => {
            if (accountInfo[2].value.length) {
                if (
                    accountInfo[2].value.includes('@') &&
                    accountInfo[2].value.includes('.com')
                ) {
                    return true;
                }
            }
        };
        let validEmail = emailCheck();

        if (
            accountInfo[0].value.length &&
            accountInfo[1].value.length &&
            accountInfo[2].value.length &&
            accountInfo[3].value.length &&
            accountInfo[4].value.length &&
            accountInfo[4].value === accountInfo[5].value &&
            validEmail
        ) {
            let email = accountInfo[2].value;
            let password = accountInfo[4].value;

            const userData = {
                name: accountInfo[0].value,
                lastname: accountInfo[1].value,
                email: accountInfo[2].value,
                usarname: accountInfo[3].value,
                password: accountInfo[4].value,
                date: Timestamp.fromDate(new Date()),
            };

            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    addDoc(collection(db, 'users'), userData).catch((err) => {
                        console.log(err);
                    });
                    setNotification(
                        'success',
                        `Enhorabuena.
                        Tu cuenta ha sido creada correctamente.`
                    );
                    navigate('/login');
                })
                .catch((error) => {
                    console.log(error);
                    setNotification('error', 'Error: email ya en uso.');
                });
        } else setNotification('error', 'Error al crear la cuenta.');
    };

    return (
        <div className="createAccContainer">
            <h3>Crear Usuario</h3>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input className="createAccInput" type="text" />
                <label>Apellido:</label>
                <input className="createAccInput" type="text" />
                <label>Email:</label>
                <input className="createAccInput" type="text" />
                <label>Usuario:</label>
                <input className="createAccInput" type="text" />
                <label>Contraseña:</label>
                <input className="createAccInput" type="password" />
                <label>Repite la contraseña:</label>
                <input className="createAccInput" type="password" />
                <button type="submit">Confirmar</button>
            </form>
        </div>
    );
};

export default CreateUser;
