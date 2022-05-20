import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/mainLogo.png';

const Footer = () => {
    return (
        <div className="bg-dark-pro">
            <div className="container px-4">
                <div className="py-4 row justify-content-between text-start">
                    <div className="mt-4 col-lg-2 col-sm-6 order-lg-2 order-xs-2">
                        <h6 className="mb-4 text-white"><span className="border-2 border-bottom border-main">Quick L</span>inks</h6>
                        <Link className="my-2 text-decoration-none d-block text-second foo-hover" to="/info">FAQ</Link>
                        <Link className="my-2 text-decoration-none d-block text-second foo-hover" to="/feedback">Feedback</Link>
                        <Link className="my-2 text-decoration-none d-block text-second foo-hover" to="/career">Career</Link>
                        <Link className="my-2 text-decoration-none d-block text-second foo-hover" to="/payment">Payment Options</Link>
                        <Link className="my-2 text-decoration-none d-block text-second foo-hover" to="/return">Return Policy</Link>
                    </div>
                    <div className="mt-4 mb-3 text-white col-lg-4 col-sm-6 order-lg-3 order-xs-1">
                        <h6 className="mb-3 text-white"><span className="border-2 border-bottom border-main">Connect Wi</span>th Us</h6>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-map-marker-alt"></i></small>
                            <small className='foo-hover'>12, Jhankar Mahbub Street,<br />Programming Hero, Bangladesh</small>
                        </div>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-phone-alt"></i></small>
                            <small className='foo-hover'>999, +88012345</small>
                        </div>
                        <h6 className="mt-4 mb-4 text-white"><span className="border-2 border-bottom border-main">Get Discount Al</span>erts</h6>
                        <div className="row justify-content-between">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                                <button className="btn btn-outline-main" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-sm-12 order-lg-1 order-xs-3">
                        <div className="pb-2">
                            <Link className="navbar-brand d-flex align-items-center" to="/home">
                                <img className='d-block' width="35" src={logo} alt="gatsbee logo" />
                                <span className="d-block pt-2 ps-2 fs-3 fw-bolder logo-font text-white">GATSBEE</span>
                            </Link>
                        </div>
                        <small className="text-second d-block"><span className="text-white">Gatsbee Corporatiopn</span> is an Bangladeshi multinational fast food corporation, founded in 2010 as a restaurant operated by Tanmay & Thomas Gatsby, in Dhaka, Bangldesh.</small>
                        <div className="mt-4 mb-2">
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-facebook-f"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-twitter"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-google-plus-g"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-linkedin-in"></i></Link>
                        </div>
                        <small className="text-second">Copyright &copy; 2022. <span className="text-light">Tanmay Kumar.</span></small>
                        <div>
                            <Link to="/desclaimer" className="text-decoration-none text-main foo-hover"><small>Desclaimer.</small></Link>
                            <Link to="/tnc" className="px-2 text-decoration-none text-main foo-hover"><small>Terms & Conditions.</small></Link>
                            <Link to="/privacy" className="text-decoration-none text-main foo-hover"><small>Privacy Policy.</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;