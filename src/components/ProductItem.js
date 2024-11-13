// src/components/ProductItem.js
import React from 'react';
import ProductViewButton from "./ProductViewButton";
import placeholder from "../images/placeholder.jpg";

function ProductItem({ id, name, price, color, brand, imgUrl }) {
    const productData = { id, name, price, color, brand, imgUrl };

    return (
        <div className="card mb-4 border-black border-1">
            <div className="card-body">
                <img
                    className="card-img-top mb-3"
                    src={imgUrl || placeholder}
                    alt={name || "Product image"}
                />
                <h5 className="card-title text-center">{name}</h5>
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
                <ProductViewButton productId={id} productData={productData} />
            </div>
        </div>
    );
}

export default ProductItem;