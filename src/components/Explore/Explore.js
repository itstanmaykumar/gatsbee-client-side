import React from 'react';
import useBurgers from '../../hooks/useBurgers';
import BurgerItem from './BurgerItem';

const Explore = () => {

    const [burgers, setBurgers] = useBurgers();

    return (
        <div className="container p-5 pb-3 text-center">
            <h1 className="mb-3">Top Tr<span className="border-bottom border-main border-3">ending Bu</span>rgers</h1>
            <div className="row g-4 pt-5">
                {
                    burgers.length === 0 ?
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
                            burgers.map((burger) => (
                                <BurgerItem key={burger._id} burger={burger}></BurgerItem>
                            ))
                        )
                }
            </div>
        </div>
    );
};

export default Explore;