import Card from '../Card/Card';
import './ItemListContainer.css';
import item1 from '../Card/angus4.jpg';
import item2 from '../Card/angus4.jpg';
import item3 from '../Card/angus4.jpg';

const ItemListContainer = () => {
    return (
        <section className="shopItems">
            <Card image={item1} item="Item 1" price="$500" />
            <Card image={item2} item="Item 2" price="$5400" />
            <Card image={item3} item="Item 3" price="$300" />
            <Card image={item3} item="Item 4" price="$500" />
            <Card image={item3} item="Item 5" price="$100" />
        </section>
    );
};

export default ItemListContainer;
