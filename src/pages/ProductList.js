import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import ProductFilter from '../components/ProductFilter';
import ProductSearch from '../components/ProductSearch';
import { useProductContext } from '../context/ProductContext';

function ProductList() {
    const { products, fetchProducts } = useProductContext();
    const [appliedFilters, setAppliedFilters] = useState({ color: '', brand: '' });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const applyFilters = (filters) => {
        setAppliedFilters(filters);
    };

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const filteredProducts = products.filter((product) => {
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
                                imgUrl={product.imgUrl}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center">Нічого показувати</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;