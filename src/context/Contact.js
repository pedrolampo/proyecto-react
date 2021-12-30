import React, { useState } from 'react';

export const ContactContext = React.createContext();

export const ContactContextProvider = ({ children }) => {
    const [contact, setContact] = useState({});
    const [showForm, setShowForm] = useState(false);

    const submitError = () => {
        if (Object.keys(contact).length === 0) {
            return (
                <h1>
                    Error al procesar la compra, falta rellenar la información
                    de contacto.
                </h1>
            );
        }
    };

    const clearContact = () => {
        setShowForm({});
    };

    return (
        <ContactContext.Provider
            value={{
                contact,
                setContact,
                showForm,
                setShowForm,
                submitError,
                clearContact,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};
