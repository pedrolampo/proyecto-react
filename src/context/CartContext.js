import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [cartQty, setCartQty] = useState(0);
    const [itemsInCart, setItemsInCart] = useState();

    const isInCart = (array, newProd) => {
        return array.some((e) => {
            return e.id === newProd.id;
        });
    };

    const addItemsToCart = (prod) => {
        if (itemsInCart) {
            if (isInCart(itemsInCart, prod)) {
                console.log('existe');
                const newProducts = itemsInCart.map((e) => {
                    if (e.id === prod.id) {
                        const newProduct = {
                            ...e,
                            inCart: (e.inCart += prod.inCart),
                        };
                        return newProduct;
                    } else {
                        return prod;
                    }
                });
                setItemsInCart(...itemsInCart, newProducts);
            } else {
                console.log('no existe');
                itemsInCart.push(prod);
            }
        } else setItemsInCart([prod]);
        cartQuantity();
    };

    // ARREGLAR ESTA FUNCION
    const cartQuantity = () => {
        let sum = 0;
        if (itemsInCart) {
            itemsInCart.forEach((e) => {
                sum += e.inCart;
            });
        }
        setCartQty(sum);
    };

    const removeProd = () => {
        itemsInCart.splice(0, 1);
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
