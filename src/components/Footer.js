import React from 'react';
import logo from '../images/logo.png';

function Footer() {
    return (
        <footer className="bg-black text-white text-center p-3 mt-auto">
            <img src={logo} alt="Home logo"
                 className="img-fluid mb-2"
                 style={{width: '4%', height: 'auto'}}/>
            <p>&copy; 2024 Chainsaw Shop</p>
        </footer>
    );
}

export default Footer;