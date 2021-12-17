import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [cartQty, setCartQty] = useState();
    const [itemsInCart, setItemsInCart] = useState([]);

    const addItemsToCart = (prod) => {
        if (itemsInCart.lenght > 0) {
            setItemsInCart([...itemsInCart, prod]);
        } else setItemsInCart(prod);

        if (cartQty) {
            setCartQty(cartQty + prod.inCart);
        } else setCartQty(prod.inCart);

        console.log(itemsInCart);
    };

    return (
        <CartContext.Provider value={{ itemsInCart, cartQty, addItemsToCart }}>
            {children}
        </CartContext.Provider>
    );
};
