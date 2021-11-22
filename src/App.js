import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <div>
                <ItemListContainer />
            </div>
        </div>
    );
};

export default App;
