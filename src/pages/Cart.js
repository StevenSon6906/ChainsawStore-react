import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;