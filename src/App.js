import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:prodId">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/category/:catId">
                        <CategoriesContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
