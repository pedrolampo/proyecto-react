import React, { useState } from 'react';

const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    const login = (objUser) => {
        setUser(objUser.username);
        window.localStorage.setItem('user', JSON.stringify(objUser));
    };

    const logout = () => {
        setUser();
        window.localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
