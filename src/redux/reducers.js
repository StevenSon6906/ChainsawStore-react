import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
    cart: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            console.log("Removed", action.payload); // Debugging
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};