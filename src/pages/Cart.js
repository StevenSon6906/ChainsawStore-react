import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container ">
            <h1 className="mb-4 text-center fw-bold">Shopping Cart</h1>
            {cart.length === 0 ? (
                <div className="text-center">
                    <p>Your cart is empty.</p>
                    <Link to="/products" className="btn btn-primary">Back to Catalogue</Link>
                </div>
            ) : (
                <>
                    <div className="list-group mb-4">
                        {cart.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onAdd={handleAddToCart}
                                onRemove={handleRemoveFromCart}
                            />
                        ))}
                    </div>
                    <div className="text-end">
                        <h4>Total: ${totalPrice.toFixed(2)}</h4>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="/products" className="btn btn-secondary">Back to Catalogue</Link>
                        <Link to="/checkout" className="btn btn-success">Checkout</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;