
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState(null);

    const fetchProducts = async () => {
        try {
            const testProducts = [
                { id: 1, name: 'Product 1', price: 10, brand: 'DniproM', color: 'Orange' },
                { id: 2, name: 'Product 2', price: 20, brand: 'DniproM', color: 'Black' },
                { id: 3, name: 'Product 3', price: 30, brand: 'DniproM', color: 'Black' },
                { id: 4, name: 'Product 4', price: 40, brand: 'Waltz', color: 'Gray' },
                { id: 5, name: 'Product 5', price: 50, brand: 'Waltz', color: 'Gray' }
            ];
            setProducts(testProducts);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    const fetchProductById = async (id) => {
        try {
            const product = products.find(p => p.id === parseInt(id));
            setProductDetail(product || null);
        } catch (error) {
            console.error("Error fetching product detail:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <ProductContext.Provider value={{ products, productDetail, fetchProducts, fetchProductById }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    return useContext(ProductContext);
};

