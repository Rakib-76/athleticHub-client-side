import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from "../../assets/register.json"
import { AuthContext } from '../providers/AuthContext';
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Register = () => {
    const { createUser } = use(AuthContext);
    const Navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                alert("Register Successfully")
                <ToastContainer>
                Navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });

    };


    return (
        <div className="max-w-4xl mx-auto ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className='lg:text-left'>
                    <Lottie style={{ width: '300px' }} animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Full Name</label>
                                <input type="text" className="input" placeholder="Enter Your fullname" />
                                <label className="label">Username</label>
                                <input type="text" className="input" placeholder="Enter Your Username" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;