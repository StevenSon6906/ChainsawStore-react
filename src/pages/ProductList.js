// src/pages/ProductList.js
import React from 'react';
import ProductItem from '../components/ProductItem';

function ProductList() {
    const products = [
        { id: 1, name: 'Product 1', price: 10, brand: 'DniproM', color: 'Orange' },
        { id: 2, name: 'Product 2', price: 20, brand: 'DniproM', color: 'Black' },
        { id: 3, name: 'Product 3', price: 30, brand: 'DniproM', color: 'Black' },
        { id: 4, name: 'Product 4', price: 40, brand: 'Waltz', color: 'Gray' },
        { id: 5, name: 'Product 5', price: 50, brand: 'Waltz', color: 'Gray' },

    ];

    return (
        <div>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3" key={product.id}>
                        <ProductItem name={product.name} price={product.price} brand={product.brand} color={product.color} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;