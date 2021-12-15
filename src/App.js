import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';
import { TestContext } from './components/Context/CartContext';
import { useState } from 'react';

const App = () => {
    const [saludo] = useState('Hola');

    return (
        <div className="App">
            <TestContext.Provider value={saludo}>
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
                    </Routes>
                </BrowserRouter>
            </TestContext.Provider>
        </div>
    );
};

export default App;
