import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useBurger from '../../hooks/UseBurger';

const BurgerDetails = () => {

    const { burgerId } = useParams();

    const [burger, setBurger] = useBurger(burgerId);

    const handleRemainUpdate = async (newQuantity) => {
        const url = `https://gatsbee.herokuapp.com/burgers/${burgerId}`;
        axios.put(url, newQuantity);
    }

    const handleOrder = () => {
        let { remain, ...rest } = burger;

        if (remain === 0) {
            toast.error("Out of Stock!");
        } else {
            remain--;
            setBurger({ remain, ...rest });

            const newQuantity = {
                current: remain
            };
            handleRemainUpdate(newQuantity);
            toast.success("Order Placed Successfully!");
        }

    }

    const handleAddStock = (e) => {
        e.preventDefault();

        let { remain, ...rest } = burger;
        const newStock = parseInt(e.target.newStock.value);
        e.target.newStock.value = "";
        remain += newStock;
        setBurger({ remain, ...rest });

        const newQuantity = {
            current: remain
        };
        handleRemainUpdate(newQuantity);
        toast.success("Stock Updated Successfully!");
    }

    return (
        <div className='container'>
            <div className='row mb-5 align-items-center justify-content-between'>
                <div className='col-6 of-y-h'>
                    <img className='w-100 burger-img' src={burger.img} alt={burger} />
                </div>
                <div className='col-6'>
                    <h1>{burger.name}<span className='ps-2 fs-6 fw-bolder'>(<i className="text-warning fas fa-star"></i>{burger.rating})</span></h1>
                    <div className='row'>
                        <p className='col-4'>{burger.cal} Cal.</p>
                        <p className='col-4'>{burger.fat} % Fat</p>
                    </div>
                    <h5>Available: <span className='text-main fw-bolder '>{burger.remain} Burgers</span></h5>
                    <small>{burger.text}</small>
                    <h4 className='mt-3 mb-4'>Price: <span className='fw-bolder'>${burger.price}</span></h4>
                    <button onClick={handleOrder} className='btn btn-dark shadow'>Order Now <i className="ps-2 fas fa-caret-right"></i></button>
                </div>
            </div>
            <form onSubmit={handleAddStock} className='col-6 bg-light-pro mx-auto my-5 px-3 py-5 text-center rounded-20 shadow'>
                <label htmlFor='newStock' className='form-label fs-3'>New Stock Quantity</label>
                <input type="number" min='1' className='form-control my-4 w-75 d-block mx-auto py-2 shadow' name='newStock' required />
                <button className='text-center btn btn-dark' type='submit'>Update Stock <i className="ps-1 fas fa-angle-double-right"></i></button>
            </form>
        </div>
    );
};

export default BurgerDetails;