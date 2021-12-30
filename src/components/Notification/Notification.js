import { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';
import './Notification.css';

const Notification = () => {
    const { notification, style, setStyle } = useContext(NotificationContext);

    if (notification.message === '') {
        return null;
    }

    const changeStyle = () => {
        setStyle('notification2');
        setTimeout(() => {
            setStyle('notification1');
        }, 2300);
    };

    return (
        <div
            className={style}
            style={{
                color: notification.severity === 'error' ? 'red' : 'green',
            }}
            onClick={() => changeStyle()}
        >
            {notification.message}
        </div>
    );
};

export default Notification;
