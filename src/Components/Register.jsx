// Register.jsx
import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottie from "../../assets/register.json"
import { AuthContext } from '../providers/AuthContext';
import { Link, useNavigate } from 'react-router'; 
import { Eye, EyeOff } from 'lucide-react';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, setUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

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

        setError("");
        setIsLoading(true); // start loading when user clicks Register

        createUser(email, password)
            .then((result) => {
                const user = result.user;

                // update profile then set user and navigate
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        // setUser might not exist in context — guard it
                        try {
                            if (typeof setUser === "function") {
                                setUser({ ...user, displayName: name, photoURL: photo });
                            }
                        } catch (e) {
                            // ignore if provider doesn't expose setUser
                        }

                        // success alert
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Registration Successful",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // navigate after short delay so user sees toast
                        setTimeout(() => {
                            setIsLoading(false);
                            navigate("/");
                        }, 600);
                    })
                    .catch((updErr) => {
                        console.error("Update profile error:", updErr);
                        setIsLoading(false);
                        Swal.fire({
                            icon: "error",
                            title: "Profile update failed",
                            text: updErr.message || "Could not update profile."
                        });
                    });

            })
            .catch((error) => {
                console.error("Registration error:", error);
                setIsLoading(false);

                // Firebase auth specific error code for email already in use
                if (error?.code === "auth/email-already-in-use" || error?.message?.includes("already in use")) {
                    Swal.fire({
                        icon: "error",
                        title: "User already exists",
                        text: "An account with this email already exists. Try logging in or reset your password.",
                    });
                } else {
                    // generic error alert
                    Swal.fire({
                        icon: "error",
                        title: "Registration failed",
                        text: error.message || "Something went wrong during registration.",
                    });
                }
            });
    }


    return (
        <div className='flex justify-center items-center mt-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex justify-center py-4 z-0 ">
                <h1 className='text-4xl font-bold p-4'>Register!</h1>
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
                            className="input bg-gray-100 border-none"
                            name='email'
                            required
                            placeholder="Enter your email" />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                                name="password" />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 z-10'
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {error && <p className="text-red-600 mt-2 font-medium">{error}</p>}

                        <div>Accept Term & Conditions</div>

                        <button
                            type='submit'
                            className="btn bg-[#403f3f] mt-4 text-white"
                            disabled={isLoading} 
                        >
                            {isLoading ? "Registering..." : "Register"}
                        </button>

                        <p className='font-bold text-center mt-4 text-accent'>
                            Already Have An Account ? <Link to='/login' className=' underline text-red-800 '>Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
