import React from 'react';


export default function InfoWindow() {
    return (
        <div className="infoWindow">
            <div className="d-flex align-items-center p-3 mt-5">
                <div className="flex-shrink-0">
                    <img src="https://static.dnipro-m.ua/origin/description/5682/design/dsg45h-1.webp" alt="Card Image" className="img-fluid"
                         style={{width: '760px', height: 'auto'}}/>
                </div>
                <div className="ms-3 text-start">
                    <h5 className="fw-bold fs-2">Heading</h5>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>
                </div>
            </div>
        </div>
    )
}