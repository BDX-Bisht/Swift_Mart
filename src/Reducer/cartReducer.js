
const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload

        // tackle the existing product..

        let existingProduct = state.cart.find(
            (item) => item.id === id + color
        )

        if (existingProduct) {
            let updatedProduct = state.cart.map(
                (item) => {
                    if (item.id === id + color) {
                        let newAmount = item.amount + amount

                        if (newAmount >= item.max) {
                            newAmount = item.max
                        }

                        return {
                            ...item,
                            amount: newAmount
                        }
                    } else {
                        return item;
                    }
                }
            )
            return {
                ...state,
                cart: updatedProduct,
            }
        }
        else {
            let cartProduct = {
                id: id + color,
                item_id: product.id,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }
    }

    if (action.type === "REMOVE_ITEM") {

        let updatedCart = state.cart.filter(
            (item) => item.id !== action.payload
        )

        return {
            ...state,
            cart: updatedCart,
        }
    }

    // to clear the cart
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    // to decrease the amount of product
    if (action.type === "SET_DECREASE") {
        let updateProduct = state.cart.map((item) => {
            if (item.id === action.payload) {
                let decAmount = item.amount - 1;

                if (decAmount <= 1) {
                    decAmount = 1
                }

                return {
                    ...item,
                    amount: decAmount
                }
            } else {
                return item
            }
        })
        return { ...state, cart: updateProduct }
    }

    // to increase the amount of product
    if (action.type === "SET_INCREASE") {
        let updateProduct = state.cart.map((item) => {
            if (item.id === action.payload) {
                let incAmount = item.amount + 1;

                if (incAmount >= item.max) {
                    incAmount = item.max
                }

                return {
                    ...item,
                    amount: incAmount
                }
            } else {
                return item
            }
        })
        return { ...state, cart: updateProduct }
    }

    // to total amount of the cart
    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((initialVal, item) => {
            let { price, amount } = item;
            initialVal = initialVal + (price * amount)
            return initialVal;
        }, 0)
        return { ...state, total_price }
    }

    return state;
}

export default cartReducer