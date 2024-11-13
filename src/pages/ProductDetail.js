import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import placeholder from "../images/placeholder.jpg";

function ProductDetail() {
    const { id } = useParams();
    const { productDetail, fetchProductById } = useProductContext();

    useEffect(() => {
        fetchProductById(id);
    }, [id, fetchProductById]);

    return (
        <div className="container mt-5">
            <h1 className="display-4">{productDetail.name}</h1>
            <div className="row mt-4">
                <div className="col-md-6">
                    <img src={productDetail.imgUrl || placeholder} alt={productDetail.name} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-6">
                    <h2 className="mt-3">${productDetail.price}</h2>
                    <p><strong>Бренд:</strong> {productDetail.brand}</p>
                    <p><strong>Колір:</strong> {productDetail.color}</p>
                    <Link to={`/products`} className="btn btn-warning mt-4">
                        Повернутись до списку
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;