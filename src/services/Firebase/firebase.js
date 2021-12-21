import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCCFOpXioPfcycZrOZlQRhM9DvFD1Lu4k8',
    authDomain: 'app-react-coderhouse.firebaseapp.com',
    projectId: 'app-react-coderhouse',
    storageBucket: 'app-react-coderhouse.appspot.com',
    messagingSenderId: '836362438472',
    appId: '1:836362438472:web:a824dbaaf1393afa96157d',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
