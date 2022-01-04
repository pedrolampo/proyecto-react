import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [itemsInCart, setItemsInCart] = useState([]);

    const isInCart = (array, newProd) => {
        return array.some((e) => {
            return e.id === newProd.id;
        });
    };

    const addItemsToCart = (prod) => {
        if (Object.keys(itemsInCart).length > 0) {
            if (isInCart(itemsInCart, prod)) {
                const newProducts = itemsInCart.map((e) => {
                    if (e.id === prod.id) {
                        const newProduct = {
                            ...e,
                            inCart: (e.inCart += prod.inCart),
                        };
                        return newProduct;
                    } else {
                        return e;
                    }
                });
                setItemsInCart(newProducts);
            } else {
                setItemsInCart([prod, ...itemsInCart]);
            }
            cartQuantity();
        } else {
            setItemsInCart([prod]);
            cartQuantity();
        }
    };

    const cartQuantity = () => {
        let sum = 0;
        if (Object.keys(itemsInCart).length > 0) {
            itemsInCart.forEach((e) => {
                sum += e.inCart;
            });
        } else sum = 0;
        return sum;
    };

    const removeProd = (id) => {
        const newCart = itemsInCart.filter((prod) => prod.id !== id);
        setItemsInCart(newCart);
    };

    const clearCart = () => {
        setItemsInCart([]);
    };

    const getTotal = () => {
        let totalAmount = 0;
        itemsInCart.forEach((e) => {
            totalAmount += e.price * e.inCart;
        });
        return totalAmount;
    };

    return (
        <CartContext.Provider
            value={{
                itemsInCart,
                addItemsToCart,
                clearCart,
                removeProd,
                getTotal,
                cartQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
