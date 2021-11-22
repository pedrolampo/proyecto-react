import Card from '../Card/Card';
import './ItemListContainer.css';
import item1 from '../Card/angus4.jpg';
import item2 from '../Card/angus4.jpg';
import item3 from '../Card/angus4.jpg';

const ItemListContainer = () => {
    return (
        <section className="shopItems">
            <Card image={item1} />
            <Card image={item2} />
            <Card image={item3} />
            <Card image={item3} />
            <Card image={item3} />
        </section>
    );
};

export default ItemListContainer;
