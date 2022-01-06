import React, { useState } from 'react';

const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    let userId = window.localStorage.getItem('user');
    let parsedUserId = JSON.parse(userId);

    const login = (user) => {
        setUser(user);
        window.localStorage.setItem('user', JSON.stringify(user));
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
                parsedUserId,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
