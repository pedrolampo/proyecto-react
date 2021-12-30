import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { ContactContextProvider } from './context/Contact';
import { NotificationContextProvider } from './context/NotificationContext';
import Notification from './components/Notification/Notification';

const App = () => {
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
                                    element={<CategoriesContainer />}
                                />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </BrowserRouter>
                    </NotificationContextProvider>
                </ContactContextProvider>
            </CartContextProvider>
        </div>
    );
};

export default App;
