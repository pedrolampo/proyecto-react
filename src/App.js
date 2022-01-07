import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { ContactContextProvider } from './context/Contact';
import { NotificationContextProvider } from './context/NotificationContext';
import Notification from './components/Notification/Notification';
import Login from './components/Login/Login';
import { useEffect, useContext } from 'react';
import UserContext from './context/UserContext';
import Contact from './components/Contact/Contact';
import CreateUser from './components/CreateUser/CreateUser';
import UserDashboard from './components/UserDashboard/UserDashboard';

const App = () => {
    const { login } = useContext(UserContext);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user');

        if (loggedUserJSON) {
            const objUser = JSON.parse(loggedUserJSON);
            login(objUser);
        }
    }, []); //eslint-disable-line

    return (
        <div className="App">
            <CartContextProvider>
                <ContactContextProvider>
                    <NotificationContextProvider>
                        <BrowserRouter>
                            <NavBar />
                            <Notification />
                            <Routes>
                                <Route
                                    exact
                                    path="/"
                                    element={<ItemListContainer />}
                                />
                                <Route
                                    path="/item/:prodId"
                                    element={<ItemDetailContainer />}
                                />
                                <Route
                                    path="/category/:catId"
                                    element={<ItemListContainer />}
                                />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path={'/createUser'}
                                    element={<CreateUser />}
                                />
                                <Route
                                    path="/myAccount"
                                    element={<UserDashboard />}
                                />
                            </Routes>
                        </BrowserRouter>
                    </NotificationContextProvider>
                </ContactContextProvider>
            </CartContextProvider>
        </div>
    );
};

export default App;
