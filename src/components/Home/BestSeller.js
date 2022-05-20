import React from 'react';
import { Link } from 'react-router-dom';
import useBurgers from '../../hooks/useBurgers';
import BurgerItem from '../Explore/BurgerItem';

const BestSeller = () => {
    const [burgers, setBurgers] = useBurgers();
    const bestSellers = burgers.slice(0, 3);

    return (
        <div className="px-3">
            <div className="container p-5 pb-3 text-center bg-light-pro rounded-10">
                <h1 className="mb-3">Top Tr<span className="border-bottom border-main border-3">ending Bu</span>rgers</h1>
                <div className="row g-4 pt-5">
                    {
                        bestSellers.length === 0 ?
                            (
                                <div className="d-flex justify-content-center text-main">
                                    <h1>Loading.....</h1>
                                    <div className="mt-2 ms-2 spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                            :
                            (
                                bestSellers.map((burger) => (
                                    <BurgerItem key={burger._id} burger={burger}></BurgerItem>
                                ))
                            )

                    }
                </div>
                <div className='my-5 text-center'>
                    <Link className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main" to="/burgers">View All</Link>
                </div>
            </div>
        </div >
    );
};

export default BestSeller;