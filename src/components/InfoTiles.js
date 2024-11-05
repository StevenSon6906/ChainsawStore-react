import React, { useState } from 'react';

export default function InfoTiles() {
    const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="infoTiles">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-4 mb-3 ">
                        <img src='https://static.dnipro-m.ua/cache/products/5684/catalog_origin_317907.jpg' alt="Image 1" className="img-fluid rounded"/>
                        <div className="ms-3 text-center">
                            <h5 className="fw-bold fs-2">DSG-62H</h5>
                            <p>Бензопила ланцюгова Dnipro-M DSG-62H призначена для тривалих робіт, розпилювання і валки великих дерев...</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src='https://static.dnipro-m.ua/cache/products/5682/catalog_origin_317900.jpg' alt="Image 2" className="img-fluid rounded"/>
                        <div className="ms-3 text-center">
                            <h5 className="fw-bold fs-2">DSG-45H</h5>
                            <p>Ланцюгова бензопила Dnipro-M DSG-45H підходить для невеликого домашнього господарства...</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src='https://static.dnipro-m.ua/cache/products/9689/catalog_origin_476226.jpg' alt="Image 3" className="img-fluid rounded"/>
                        <div className="ms-3 text-center">
                            <h5 className="fw-bold fs-2">DSG-25H</h5>
                            <p>Бензопила Dnipro-M DSG-25H — універсальне та автономне рішення для закриття різноманітних завдань...</p>
                        </div>
                    </div>
                </div>


                <div className='text-center'>
                    <button onClick={handleViewMore} className='btn btn-lg btn-warning mt-3'>
                        {showMore ? 'View less' : 'View more'}
                    </button>
                </div>

                {showMore && (
                    <div className="additional-content mt-4">
                        <h2 className="fw-bold text-center">Додаткова інформація</h2>
                        <p>Якщо ви це бачите, значить усе працює!</p>
                    </div>
                )}
            </div>
        </div>
    );
}