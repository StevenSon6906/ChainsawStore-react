// src/components/ProductViewButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProductViewButton({ productId, size, fullWidth }) {
    return (
        <Link to={`/products/${productId}`} className={`btn btn-warning mt-3 ${size} ${fullWidth ? 'w-100' : ''}`}>
            View more
        </Link>
    );
}

ProductViewButton.propTypes = {
    productId: PropTypes.number.isRequired,
    size: PropTypes.string,
    fullWidth: PropTypes.bool,
};

ProductViewButton.defaultProps = {
    size: 'btn-sm',
    fullWidth: false,
};