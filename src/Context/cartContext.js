import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/cartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("ecom-swift")
    if (!localCartData) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCartData(),
    total_price: "",
    shipping_fee: 4900,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // Add data in localSotrage
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_PRICE" })
        localStorage.setItem('ecom-swift', JSON.stringify(state.cart));
    }, [state.cart])

    const addToCart = (id, color, amount, product) => {
        window.scrollTo(0, 0)
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // to increase the amount of product
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id })
    }

    // to decrease the amount of product
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREASE", payload: id })
    }

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }} >
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext }