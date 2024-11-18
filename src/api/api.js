import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/api/chainsaws';

export const fetchProducts = async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();  // Додаємо фільтри як параметри
    const response = await axios.get(`${BASE_URL}${params ? `?${params}` : ''}`);
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};