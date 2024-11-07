// src/components/ProductSearch.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductSearch({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value); // Оновлюємо локальне значення пошуку
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSearch(query); // Передаємо введене значення пошуку в ProductList при надсиланні форми
    };

    return (
        <form className="d-flex ms-auto mb-3" onSubmit={handleFormSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
            />
            <button className="btn btn-outline-success" type="submit" style={{ width: '168px'}}>Search</button>
        </form>
    );
}

ProductSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default ProductSearch;