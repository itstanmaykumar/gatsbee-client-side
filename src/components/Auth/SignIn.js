import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import GoogleLogo from "../../media/google.svg";
import logo from "../../media/mainLogo.png";


const SignIn = () => {

    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);


    const handleGoogle = () => {
        signInWithGoogle();
    }

    // useEffect(() => {
    //     if (googleError) {
    //         toast.error(googleError);
    //     }
    // }, [googleError])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (googleUser) {
            console.log(from);
            navigate(from, { replace: true });
        }
    }, [googleUser]);

    return (
        <div className='container my-5'>
            <div className="row py-5 justify-content-between align-items-center">
                <div className='mx-auto my-5 col-lg-6 p-5 shadow-lg rounded-20 bg-light-pro'>
                    <img className="d-block col-4 mx-auto my-4" src={logo} />
                    <h2 className="text-center">Hey! Welcome to <span className="logo-font fs-1">GATSBEE</span></h2>
                    <div className='my-5 py-2'>
                        <button onClick={handleGoogle} className='px-5 btn btn-outline-dark d-flex justify-content-center align-items-center w-100'
                        >
                            <img className="d-block" src={GoogleLogo} alt='' />
                            <p className="mt-3 fs-5 ms-3"> Google Sign In </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;