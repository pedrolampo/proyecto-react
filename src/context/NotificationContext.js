import React, { useState } from 'react';

export const NotificationContext = React.createContext();

export const NotificationContextProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const [style, setStyle] = useState('notification1');

    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    const value = {
        notification: {
            message,
            severity,
        },
        setNotification,
        style,
        setStyle,
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};
