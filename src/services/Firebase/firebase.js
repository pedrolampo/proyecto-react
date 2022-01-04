import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
    getDocs,
    collection,
    query,
    where,
    getDoc,
    doc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getProds = (key, op, value) => {
    return new Promise((res, rej) => {
        const collectionQuery =
            key && op && value
                ? query(
                      collection(db, 'products'),
                      where('category', '==', value)
                  )
                : collection(db, 'products');

        getDocs(collectionQuery)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                res(products);
            })
            .catch((err) => {
                rej(`Error al obtener los productos: ${err}`);
            });
    });
};

export const getSingleProd = (value) => {
    return new Promise((res, rej) => {
        getDoc(doc(db, 'products', value))
            .then((querySnapshot) => {
                const product = {
                    id: querySnapshot.id,
                    ...querySnapshot.data(),
                };
                res(product);
            })
            .catch((err) => {
                rej(`Error al obtener el producto: ${err}`);
            });
    });
};
