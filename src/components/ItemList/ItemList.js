import item1 from './angus4.jpg';
import item2 from './angus4.jpg';
import item3 from './angus4.jpg';

function getItems() {
    return new Promise((resolve) => {
        const products = [
            {
                id: '1',
                image: item1,
                name: 'Item 1',
                price: 1500,
                stock: 0,
            },
            {
                id: '2',
                image: item2,
                name: 'Item 2',
                price: 800,
                stock: 25,
            },
            {
                id: '3',
                image: item3,
                name: 'Item 3',
                price: 500,
                stock: 8,
            },
            {
                id: '4',
                image: item3,
                name: 'Item 4',
                price: 250,
                stock: 8,
            },
            {
                id: '5',
                image: item3,
                name: 'Item 5',
                price: 80,
                stock: 30,
            },
        ];
        setTimeout(() => resolve(products), 3000);
    });
}

export default getItems;
