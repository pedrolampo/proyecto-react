import React, { useState } from 'react';

export const NotificationContext = React.createContext();

export const NotificationContextProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <NotificationContext.Provider
            value={{
                notification: {
                    message,
                    severity,
                },
                setNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
