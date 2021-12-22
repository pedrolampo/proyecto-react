import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [cartQty, setCartQty] = useState(0);
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
                itemsInCart.push(prod);
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
        setCartQty(sum);
    };

    const removeProd = (id) => {
        itemsInCart.splice(
            itemsInCart.findIndex((e) => e.id === id),
            1
        );
        setItemsInCart(itemsInCart);
        cartQuantity();
    };

    const clearCart = () => {
        setItemsInCart([]);
        setCartQty(0);
    };

    return (
        <CartContext.Provider
            value={{
                itemsInCart,
                cartQty,
                addItemsToCart,
                clearCart,
                removeProd,
                cartQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
