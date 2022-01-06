import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { db } from '../../services/Firebase/firebase';
import './UserDashboard.css';

const UserDashboard = () => {
    const [orders, setOrders] = useState([]);
    const { parsedUserId } = useContext(UserContext);

    useEffect(() => {
        getDocs(
            query(
                collection(db, 'orders'),
                where('userID', '==', parsedUserId.uid),
                limit(10)
            )
        ).then((querySnapshot) => {
            const orders = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setOrders(orders);
        });

        return () => {
            setOrders([]);
        };
    }, []); // eslint-disable-line

    return (
        <div cellSpacing="0" className="ordersContainer">
            <h1>Mis compras</h1>
            <table className="ordersTable">
                <thead>
                    <tr>
                        <th>ID de Compra</th>
                        <th>Monto Total</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((e) => {
                        return (
                            <tr className="orderInfoRow" key={e.id}>
                                <td className="orderInfo">{e.id}</td>
                                <td className="orderInfo">${e.total}</td>
                                <td className="orderInfo">{e.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserDashboard;
