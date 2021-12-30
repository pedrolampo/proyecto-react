import { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';

const Notification = () => {
    const { notification, setNotification } = useContext(NotificationContext);

    if (notification.message === '') {
        return null;
    }

    return (
        <div
            style={{
                color: notification.severity === 'error' ? 'red' : 'green',
                fontSize: '3rem',
                paddingTop: '2rem',
            }}
            onClick={() => setNotification('')}
        >
            {notification.message}
        </div>
    );
};

export default Notification;
