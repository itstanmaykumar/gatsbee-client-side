import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const BurgerItem = ({ burger }) => {
    const { _id, name, img, text, price, rating } = burger;

    const navigate = useNavigate();

    const handleBurgerDeatils = (id) => {
        navigate(`/burgers/${id}`);
    }

    return (
        <div onClick={() => handleBurgerDeatils(_id)} className='col-xl-4 col-md-6 mx-auto pointer'>
            <div className='h-100 p-3 text-start'>
                <div className='h-100 pb-4 d-flex flex-column justify-content-between shadow-lg bg-warning rounded-10'>
                    <div className='rounded-10 bg-white shadow of-y-h'>
                        <img className='w-100 d-block rounded-10 burger-img' src={img} alt="burger" />
                    </div>
                    <div className='pt-4 px-3 rounded-b-10'>
                        <h3 className='text-center'>{name}</h3>
                    </div>
                    <div className='px-3'>
                        <small className='d-flex justify-content-between'>
                            <span className='d-block fw-bolder text-dark'>$ {price}</span>
                            <span className='d-block fw-bolder text-dark'>{rating} <i className="ps-1 fas fa-star"></i></span>
                        </small>
                    </div>
                    <div className='pb-3 px-3'>
                        <small className='text-second'>{text.slice(0, 100)}...<span className='fw-bolder'>Read More</span></small>
                    </div>
                    <div className='px-3'>
                        <button onClick={() => handleBurgerDeatils(_id)} className='btn btn-dark'>Details <i className="ps-2 fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BurgerItem;