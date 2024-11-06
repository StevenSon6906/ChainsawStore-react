import React from 'react';
export default function ProductSearch() {
    return (
        <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}