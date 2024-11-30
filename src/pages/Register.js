import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!username || !email || password.length < 6) {
            setError(
                "All fields are required. Password must be at least 6 characters long."
            );
            return;
        }

        localStorage.setItem("userEmail", email);
        localStorage.setItem("username", username);
        navigate("/");
    };

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="text-center mb-4">Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>

                <div className="text-center mt-3">
                    <p>
                        Already a customer?{" "}
                        <button
                            className="btn btn-link"
                            onClick={() => navigate("/login")}
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;