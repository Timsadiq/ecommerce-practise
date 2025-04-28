import React, { createContext, useContext, useState, useEffect } from "react";
const Cartcontext = createContext();

export const useCart = () => useContext(Cartcontext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart')
        return saved ? JSON.parse(saved) : []


    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [])


    const addToCart = (product) => {
        setCartItems(prev => {
            const exists = prev.find(item =>
                item.id === product.id
            )
            if (exists) {
                return prev.map(item =>
                    item.id = product.id ? { ...item, qty: item.qty + 1 } : item
                )
            } else {
                return [...prev, { ...product, qty: 1 }]
            }

        })
    }
    const removeFromCart = (id) => {
        setCartItems(prev =>
            prev.filter(item => item.id != id)
        )
    }
    const incrementByQty = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        )
    }
    const decrementQty = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.qty >1 ? { ...item, qty: item.qty - 1 } : item
            )
        )
    }
    const clearCart = () => {
        setCartItems([])
    }

    const totalitems = () => cartItems.reduce((acc, item) => acc + item.qty, 0)

    return (
        <Cartcontext.Provider value={{ cartItems, addToCart, removeFromCart, incrementByQty, decrementQty, clearCart,totalitems}}>

            {children}
        </Cartcontext.Provider>
    );
};
