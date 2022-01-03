import { useState, useContext } from 'react';
import './Login.css';
import UserContext from '../../context/UserContext';
import { NotificationContext } from '../../context/NotificationContext';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        let userData = document.querySelectorAll('.loginInput');

        if (userData[0].value.length > 0 && userData[1].value.length > 0) {
            let email = userData[0].value;
            let password = userData[1].value;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    login(user);
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                    setNotification(
                        'error',
                        'Usuario o contraseña incorrectos'
                    );
                })
                .finally(() => {
                    setNotification('success', `Bienvenido, ${email}`);
                });
        } else setNotification('error', 'Error al iniciar sesión.');
    };

    if (user) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <div className="loginContainer">
            <h3 className="loginTitle">Acceder</h3>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input
                    className="loginInput"
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <label>Contraseña:</label>
                <input
                    className="loginInput"
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <div className="loginButtonsContainer">
                    <button className="loginButtons" type="submit">
                        Entrar
                    </button>
                    <Link className="createUser" to={'/createUser'}>
                        Crear usuario
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
