import item1 from './img/1.jpg';
import item2 from './img/2.jpg';
import item3 from './img/3.jpg';
import item4 from './img/4.jpg';
import item5 from './img/5.jpg';
import item6 from './img/6.jpg';
import item7 from './img/7.jpg';

const products = [
    {
        id: '1',
        image: item1,
        name: 'Remera 1',
        price: 1500,
        stock: 0,
        inCart: 0,
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        id: '2',
        image: item2,
        name: 'Remera 2',
        price: 800,
        stock: 25,
        inCart: 0,
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        id: '3',
        image: item3,
        name: 'Remera 3',
        price: 500,
        stock: 8,
        inCart: 0,
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        id: '4',
        image: item4,
        name: 'Taza 1',
        price: 250,
        stock: 8,
        inCart: 0,
        category: 'tazas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        id: '5',
        image: item5,
        name: 'Taza 2',
        price: 80,
        stock: 30,
        inCart: 0,
        category: 'tazas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        id: '6',
        image: item6,
        name: 'Reloj Pared',
        price: 80,
        stock: 30,
        inCart: 0,
        category: 'otro',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        id: '7',
        image: item7,
        name: 'Poster',
        price: 80,
        stock: 30,
        inCart: 0,
        category: 'otro',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
];

export const getAllProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const product = products.find(
            (prod) => parseInt(prod.id) === parseInt(id)
        );
        setTimeout(() => resolve(product), 1500);
    });
};

export const getProdByCategory = (cat) => {
    return new Promise((resolve) => {
        const filteredProducts = products.filter((i) => {
            return i.category === cat;
        });
        setTimeout(() => resolve(filteredProducts), 1500);
    });
};
