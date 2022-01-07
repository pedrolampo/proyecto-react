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
        setContact({});
    };

    const value = {
        contact,
        setContact,
        showForm,
        setShowForm,
        submitError,
        clearContact,
    };

    return (
        <ContactContext.Provider value={value}>
            {children}
        </ContactContext.Provider>
    );
};
