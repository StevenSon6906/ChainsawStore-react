import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import { ProductProvider } from './context/ProductContext';
import './App.css';
import Cart from "./pages/Cart";

function App() {
    return (
        <ProductProvider>
            <Router>
                <div className="app-container d-flex flex-column min-vh-100">
                    <Navbar />
                    <div className="container flex-grow-1 my-4">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<ProductList />} />
                            <Route path="/products/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ProductProvider>
    );
}

export default App;