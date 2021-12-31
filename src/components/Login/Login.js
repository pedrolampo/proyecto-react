import { useState, useContext } from 'react';
import './Login.css';
import UserContext from '../../context/UserContext';
import { NotificationContext } from '../../context/NotificationContext';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const objUser = {
            username,
            password,
        };
        let userData = document.querySelectorAll('.loginInput');
        if (userData[0].value.length > 0 && userData[1].value.length > 0) {
            login(objUser);
            setNotification('success', `Bienvenido ${objUser.username}`);
            navigate('/');
        } else setNotification('error', 'Error al iniciar sesión.');
    };

    if (user) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <div className="loginContainer">
            <h3>Log In</h3>
            <form onSubmit={handleLogin}>
                <label>Usuario</label>
                <input
                    className="loginInput"
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <label>Contraseña</label>
                <input
                    className="loginInput"
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button className="loginButtons" type="submit">
                    Login
                </button>
                <button className="loginButtons">Crar usuario</button>
            </form>
        </div>
    );
};

export default Login;
