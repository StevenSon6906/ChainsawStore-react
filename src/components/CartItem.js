import React from "react";

const CartItem = ({ item, onAdd, onRemove }) => {
    return (
        <div className="row align-items-center border-bottom py-3">
            <div className="col-2">
                <img src={item.imgUrl} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-4">
                <h5>{item.name}</h5>
                <p className="text-muted">{item.brand}</p>
            </div>
            <div className="col-2">
                <h6>${item.price}</h6>
            </div>
            <div className="col-3 d-flex align-items-center">
                <button className="btn btn-outline-secondary" onClick={() => onRemove(item.id)}>-</button>
                <span className="mx-3">{item.quantity}</span>
                <button className="btn btn-outline-secondary" onClick={() => onAdd(item)}>+</button>
            </div>
            <div className="col-1">
                <h6>${item.price * item.quantity}</h6>
            </div>
        </div>
    );
};

export default CartItem;