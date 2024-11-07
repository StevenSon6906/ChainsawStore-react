// src/pages/ProductList.js
import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import ProductFilter from '../components/ProductFilter';
import ProductSearch from "../components/ProductSearch";
import { Link } from 'react-router-dom';

function ProductList() {
    const products = [
        { id: 1, name: 'Product 1', price: 10, brand: 'DniproM', color: 'Orange' },
        { id: 2, name: 'Product 2', price: 20, brand: 'DniproM', color: 'Black' },
        { id: 3, name: 'Product 3', price: 30, brand: 'DniproM', color: 'Black' },
        { id: 4, name: 'Product 4', price: 40, brand: 'Waltz', color: 'Gray' },
        { id: 5, name: 'Product 5', price: 50, brand: 'Waltz', color: 'Gray' },
    ];

    const [appliedFilters, setAppliedFilters] = useState({ color: '', brand: '' });
    const [searchQuery, setSearchQuery] = useState('');

    const applyFilters = (filters) => {
        setAppliedFilters(filters);
    };

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const filteredProducts = products.filter(product => {
        const matchesColor = appliedFilters.color ? product.color === appliedFilters.color : true;
        const matchesBrand = appliedFilters.brand ? product.brand === appliedFilters.brand : true;
        const matchesSearch = searchQuery ? product.name.toLowerCase().includes(searchQuery) : true;
        return matchesColor && matchesBrand && matchesSearch;
    });

    return (
        <div>
            <div className="flex-row">
                <ProductSearch onSearch={handleSearch} />
                <ProductFilter onApplyFilters={applyFilters} />
            </div>
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="col-md-3 mb-3" key={product.id}>
                            <ProductItem
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                brand={product.brand}
                                color={product.color}
                            />
                        </div>
                    ))
                ) : (
                    <p className='text-center'>Нічого показувати</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;