import React from 'react';
import ViewButton from "./ViewButton";
import  placeholder from "./placeholder.jpg"

function ProductItem({ name, price, color, brand}) {
    return (
        <div className="card mb-4 border-black border-1">
            <div className="card-body">
                <img className="card-img-top mb-3" src={placeholder} alt=""/>
                <h5 className="card-title text-center">{name}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et
                    dolore magna aliqua.</p>
                <div className="d-flex justify-content-between">
                    <p className="card-text fw-bold">Brand :</p>
                    <p className="card-text">{brand}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="card-text fw-bold">Color :</p>
                    <p className="card-text">{color}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="card-text fw-bold">Price :</p>
                    <p className="card-text">${price}</p>
                </div>
                <ViewButton fullWidth/>
            </div>
        </div>
    );
}

export default ProductItem;