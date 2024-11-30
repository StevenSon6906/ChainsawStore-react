import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

export default function ProductDetail() {
    const { id } = useParams();
    const { productDetail, getProductById, loading } = useProductContext();
    const dispatch = useDispatch();

    useEffect(() => {
        getProductById(id); // Load product details by ID
    }, [id]);

    const handleAddToCart = () => {
        console.log("Added", productDetail); // Debugging
        dispatch(addToCart(productDetail));
    };

    if (loading) return <div>Завантаження...</div>;
    if (!productDetail) return <div>Продукт не знайдено</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={productDetail.imgUrl} alt={productDetail.name} className="img-fluid border border-2 rounded" />
                </div>
                <div className="col-md-6">
                    <h1 className="display-4">{productDetail.name}</h1>
                    <h2 className="mb-3">${productDetail.price}</h2>
                    <p><strong>Бренд:</strong> {productDetail.brand}</p>
                    <p><strong>Ватт:</strong> {productDetail.watts}</p>
                    <p><strong>Колір:</strong> {productDetail.color}</p>
                    <div className="col-md-6">
                        <Link to={`/products`} className="btn btn-warning mt-4">
                            Повернутись до списку
                        </Link>
                        <button className="btn btn-success mt-2" onClick={handleAddToCart}>
                            Додати до кошика
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}