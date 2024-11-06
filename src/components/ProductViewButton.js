import React from 'react';
import PropTypes from 'prop-types';

export default function ProductViewButton({ size, fullWidth }) {
    return (
        <div className={`btn btn-warning mt-3 ${size} ${fullWidth ? 'w-100' : ''}`}>
            View more
        </div>
    );
}

ProductViewButton.propTypes = {
    size: PropTypes.string,
    fullWidth: PropTypes.bool,
};

ProductViewButton.defaultProps = {
    size: 'btn-sm',
    fullWidth: false,
};