import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-black ">
                <div className="container">
                    <img src="https://static-00.iconduck.com/assets.00/chainsaw-icon-2048x2048-e49i2pc8.png" alt="Home logo" className="img-fluid"
                         style={{width: '4%', height: 'auto'}} />
                    <a className="navbar-brand text-light fs-3 fw-bold">Chainsaw shop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link text-light" to="/">Home</Link>
                            <Link className="nav-item nav-link text-light" to="/products">Catalog</Link>
                            <Link className="nav-item nav-link text-light" to="/cart">Cart</Link>
                        </div>
                    </div>
                </div>
            </nav>
    );
}
