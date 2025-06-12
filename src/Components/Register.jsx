
import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottie from "../../assets/register.json"
import { AuthContext } from '../providers/AuthContext';
import { Link, useNavigate} from 'react-router';
import Swal from 'sweetalert2';



const Register = () => {
    const { createUser, setUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    // console.log(createUser);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();


        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email, photo);

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isLongEnough) {
            if (!hasUppercase) {
                setError("Password must contain at least one uppercase letter.");
            } else if (!hasLowercase) {
                setError("Password must contain at least one lowercase letter.");
            } else {
                setError("Password must be at least 6 characters long.");
            }
            return;
        }

        setError("")

        createUser(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                         setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/")
                    })
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }


    return (
        <div className='flex justify-center mt-10 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex justify-center py-4 z-0 ">

                <div className='lg:text-left'>
                    <Lottie style={{ width: '200px' }} animationData={registerLottie} loop={true}></Lottie>
                </div>

                <form onSubmit={handleRegister} className="card-body" >
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <input
                            type="text"
                            className="input  bg-gray-100 border-none"
                            name='name'
                            required
                            placeholder="Enter your name" />
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            className="input bg-gray-100 border-none"
                            name='photo'
                            required
                            placeholder="Enter your photo url" />
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input  bg-gray-100 border-none"
                            name='email'
                            required
                            placeholder="Email" />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input bg-gray-100 border-none"
                            name='password'
                            required
                            placeholder="Password" />

                        {error && <p className="text-red-600 mt-2 font-medium">{error}</p>}

                        <div>Accept Term & Conditions</div>


                        <button

                            type='submit'
                            className="btn bg-[#403f3f] mt-4 text-white">Register</button>
                        <p
                            className='font-bold text-center mt-4 text-accent'>Already Have An Account ? <Link to='/login' className=' underline text-red-800 '>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;


