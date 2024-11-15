// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import ProductFilter from '../components/ProductFilter';
import ProductSearch from '../components/ProductSearch';
import Loader from "../components/Loader";
import { useProductContext } from '../context/ProductContext';

function ProductList() {
    const { products, getProducts, loading } = useProductContext();
    const [appliedFilters, setAppliedFilters] = useState({ color: '', brand: '' });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getProducts(appliedFilters);
    }, [appliedFilters]);

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div>
            <div className="flex-row">
                <ProductSearch onSearch={handleSearch} />
                <ProductFilter onApplyFilters={(filters) => setAppliedFilters(filters)} />
            </div>
            {loading ? (
                <Loader />
            ) : (
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
                                    imgUrl={product.imgUrl}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Нічого показувати</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProductList;