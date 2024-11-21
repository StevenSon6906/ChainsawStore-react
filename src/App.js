import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import Success from "./pages/Success";
import Footer from './components/Footer';
import Navbar from './components/NavBar/Navbar';
import { ProductProvider } from './context/ProductContext';
import './App.css';

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
                            <Route path="/checkout" element={<Form />} />
                            <Route path="/success" element={<Success />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ProductProvider>
    );
}

export default App;