import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <div className="shopBody">
                <ItemListContainer />
                <ItemDetailContainer />
            </div>
        </div>
    );
};

export default App;
