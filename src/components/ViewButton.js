import React from 'react';
import PropTypes from 'prop-types';

export default function ViewButton({ size, fullWidth }) {
    return (
        <div className={`btn btn-warning mt-3 ${size} ${fullWidth ? 'w-100' : ''}`}>
            View more
        </div>
    );
}

ViewButton.propTypes = {
    size: PropTypes.string,
    fullWidth: PropTypes.bool,
};

ViewButton.defaultProps = {
    size: 'btn-sm', // Розмір за замовчуванням
    fullWidth: false, // За замовчуванням кнопка не розширюється на всю ширину
};