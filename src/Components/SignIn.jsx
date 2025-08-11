import React, { use, useState } from 'react';
import lottieSignIn from '../../assets/Sign_In.json'
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';
import SocialLogin from '../Share/SocialLogin';


const SignIn = () => {
    const { signIn } = use(AuthContext);
    const Navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                Navigate("/")


            })
            .catch((error) => {
                // Reset errors first
                setEmailError('');
                setPasswordError('');

                // Firebase auth error codes for email or password errors
                if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-email') {
                    setEmailError('Invalid or unregistered email address');
                } else if (error.code === 'auth/wrong-password') {
                    setPasswordError('Incorrect password');
                } else {
                    // generic error fallback
                    setEmailError('Login failed. Please try again.');
                }
            });

    }
    return (
        <div className="max-w-4xl mx-auto mt-5 lg:mt-20 md:mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:text-left'>
                    <Lottie style={{ width: '300px' }} animationData={lottieSignIn} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body">
                        <form onSubmit={handleSignIn} noValidate>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}

                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />
                                {passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>}

                                <div><a className="link link-hover">Forgot password?</a></div>

                                <button className="btn btn-neutral mt-4">SignIn</button>
                                <p className='font-bold text-center mt-4 text-accent'>
                                    Don’t Have An Account ? <Link to='/register' className='underline text-red-800'>Register</Link>
                                </p>
                            </fieldset>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;