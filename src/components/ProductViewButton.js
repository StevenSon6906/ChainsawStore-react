// src/components/ProductViewButton.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductViewButton({ productId, size, fullWidth }) {
    return (
        <Link
            to={`/products/${productId}`}
            className={`btn btn-warning mt-3 w-100`}>
            View more
        </Link>
    );
}
