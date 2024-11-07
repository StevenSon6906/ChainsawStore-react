
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container d-flex flex-column min-vh-100">
                <Navbar />
                <div className="container flex-grow-1 my-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductList />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

