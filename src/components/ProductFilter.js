import React, { useState } from 'react';

function ProductFilter({ onApplyFilters }) {
    const [colorFilter, setColorFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');

    const handleApply = () => {
        onApplyFilters({ color: colorFilter, brand: brandFilter });
    };

    return (
        <div className="filters mb-3 d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <select
                    value={colorFilter}
                    onChange={(e) => setColorFilter(e.target.value)}
                    className="form-select me-2"
                    style={{ width: '200px' }}
                >
                    <option value="">All Colors</option>
                    <option value="Orange">Orange</option>
                    <option value="Black">Black</option>
                    <option value="Gray">Gray</option>
                </select>

                <select
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                    className="form-select"
                    style={{ width: '200px' }}
                >
                    <option value="">All Brands</option>
                    <option value="DniproM">DniproM</option>
                    <option value="Waltz">Waltz</option>
                </select>
            </div>

            <button onClick={handleApply} className="btn btn-primary"
                    style={{ width: '150px' }}>
                Apply
            </button>
        </div>
    );
}

export default ProductFilter;