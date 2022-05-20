import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from "../../media/hero_main.png";

const Banner = () => {
    return (
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="my-3 col-md-6 col-10 order-md-2">
                    <img className="w-100 p-2" src={heroImg} alt="banner img" />
                </div>
                <div className="my-3 col-md-6 order-md-1 pe-4">
                    <p className="mb-2 text-second">15% OFF EVERYTHING</p>
                    <h1 className="mb-3">Taste The <span className="text-warning">Finest Delicious Burgers</span> of Gatsbee Now!!</h1>
                    <small className="mb-2 d-block text-secondary">Get free large Fries when you download the Gatsbee’s app and join MyGatsbee’s Rewards. Then, get free Gatsbee’s faves with 1500 bonus points after your first purchase.</small>
                    <Link className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main" to="/posters">Explore <i className="ps-1 fas fa-angle-double-right"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;