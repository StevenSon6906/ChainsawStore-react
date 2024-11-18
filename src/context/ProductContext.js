import React, { createContext, useContext, useState } from 'react';
import { fetchProducts, fetchProductById } from '../api/api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProducts = async (filters) => {
        setLoading(true);
        try {
            const data = await fetchProducts(filters);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const getProductById = async (id) => {
        setLoading(true);
        try {
            const data = await fetchProductById(id);
            setProductDetail(data);
        } catch (error) {
            console.error("Error fetching product detail:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductContext.Provider value={{ products, productDetail, getProducts, getProductById, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => useContext(ProductContext);