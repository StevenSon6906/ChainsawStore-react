import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => (
    <div className="container mt-5 text-center">
        <h1>Thank You for Your Submission!</h1>
        <p>Your order has been successfully placed.</p>
        <Link to="/products" className="btn btn-primary">Back to Catalogue</Link>
    </div>
);

export default SuccessPage;