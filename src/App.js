import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import Success from "./pages/Success";
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Navbar from './components/NavBar/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
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

                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />

                            {/* Protected Routes */}
                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <Home />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/products"
                                element={
                                    <ProtectedRoute>
                                        <ProductList />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/products/:id"
                                element={
                                    <ProtectedRoute>
                                        <ProductDetail />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/cart"
                                element={
                                    <ProtectedRoute>
                                        <Cart />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/checkout"
                                element={
                                    <ProtectedRoute>
                                        <Form />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/success"
                                element={
                                    <ProtectedRoute>
                                        <Success />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ProductProvider>
    );
}

export default App;