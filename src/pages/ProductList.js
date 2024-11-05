
import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import ProductFilter from '../components/ProductFilter';

function ProductList() {
    const products = [
        { id: 1, name: 'Product 1', price: 10, brand: 'DniproM', color: 'Orange' },
        { id: 2, name: 'Product 2', price: 20, brand: 'DniproM', color: 'Black' },
        { id: 3, name: 'Product 3', price: 30, brand: 'DniproM', color: 'Black' },
        { id: 4, name: 'Product 4', price: 40, brand: 'Waltz', color: 'Gray' },
        { id: 5, name: 'Product 5', price: 50, brand: 'Waltz', color: 'Gray' },
    ];

    const [appliedFilters, setAppliedFilters] = useState({ color: '', brand: '' });

    const applyFilters = (filters) => {
        setAppliedFilters(filters);
    };

    const filteredProducts = products.filter(product => {
        const matchesColor = appliedFilters.color ? product.color === appliedFilters.color : true;
        const matchesBrand = appliedFilters.brand ? product.brand === appliedFilters.brand : true;
        return matchesColor && matchesBrand;
    });

    return (
        <div>
            <ProductFilter onApplyFilters={applyFilters} />

            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="col-md-3 mb-3" key={product.id}>
                            <ProductItem
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