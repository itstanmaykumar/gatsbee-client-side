import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import logo from '../../media/mainLogo.png';

const Navbar = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [])

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/home">
                    <img className='d-block' width="35" src={logo} alt="gatsbee logo" />
                    <span className="d-block pt-2 ps-2 fs-3 fw-bolder logo-font">GATSBEE</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">
                        <li className="nav-item me-2 btn p-0">
                            <span className="nav-link">
                                {
                                    user?.uid && (<span>Hi {user?.displayName?.slice(0, user?.displayName?.indexOf(" "))},</span>)
                                }
                            </span>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/burgers">Explore</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {
                            user?.uid &&
                            <li className="nav-item me-3">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        }
                        {
                            user?.uid ? (
                                <li className="ms-2 nav-item">
                                    <Link onClick={handleSignout} className="btn btn-outline-dark" to="/home">
                                        Sign Out <i className="fas fa-sign-in-alt"></i>
                                    </Link>
                                </li>
                            ) : (
                                <li className="ms-2 nav-item">
                                    <Link className="btn btn-outline-dark" to="/signin">
                                        Sign In <i className="fas fa-sign-in-alt"></i>
                                    </Link>
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;