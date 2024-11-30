import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userEmail"); // Clear credentials
        navigate("/login"); // Redirect to login
    };

    return (
        <button className="btn btn-warning" onClick={handleLogout}>
            Sign out
        </button>
    );
};

export default LogoutButton;