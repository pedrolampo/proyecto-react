import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';

const App = () => {
    return (
        <div className="App">
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
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
            </CartContextProvider>
        </div>
    );
};

export default App;
