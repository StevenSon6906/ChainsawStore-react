import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import LogoutButton from "../LogoutButton";
import logo from '../../images/logo.png';

export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-black ">
                <div className="container">
                    <img src={logo} alt="Home logo" className="img-fluid"
                         style={{width: '4%', height: 'auto'}} />
                    <a className="navbar-brand text-light fs-3 fw-bold">Chainsaw shop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link text-light" to="/">Home</Link>
                            <Link className="nav-item nav-link text-light" to="/products">Catalog</Link>
                            <Link className="nav-item nav-link text-light" to="/cart">Cart</Link>
                        </div>
                        <LogoutButton/>
                    </div>
                </div>
            </nav>
    );
}
