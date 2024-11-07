// src/pages/ProductDetail.js
import React from 'react';
import {Link, useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID: {id}</p>
            <Link to={`/products`} className={`btn btn-warning mt-3`}>
                Go back
            </Link>
        </div>
    );
}

export default ProductDetail;
