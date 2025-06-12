// import Lottie from 'lottie-react';
// import React, { use } from 'react';
// import registerLottie from "../../assets/register.json"
// import { AuthContext } from '../providers/AuthContext';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';

// const Register = () => {
//     const { createUser } = use(AuthContext);
//     const Navigate = useNavigate();

//     const handleRegister = e => {
//         e.preventDefault();
//         const form = e.target
//         const email = form.email.value;
//         const password = form.password.value;
//         const photo= form.photo.value;
//         console.log(email, password ,photo);


//         createUser(email, password)
//             .then((result) => {
//                 console.log(result.user);
//                 toast.success("Registered Successfully");
//                 Navigate("/")
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 console.log(errorMessage);
//                   toast.error("Registration Failed");

//             });


//     };


//     return (
//         <div className="max-w-4xl mx-auto ">
//             <div className="hero-content flex-col lg:flex-row-reverse">

//                 <div className='lg:text-left'>
//                     <Lottie style={{ width: '300px' }} animationData={registerLottie} loop={true}></Lottie>
//                 </div>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

//                     <div className="card-body">
//                         <form onSubmit={handleRegister}>
//                             <fieldset className="fieldset">
//                                 <label className="label">Full Name</label>
//                                 <input type="text" className="input" placeholder="Enter Your fullname" />
//                                 <label className="label">Email</label>
//                                 <input type="email" className="input" placeholder="Email" name='email' />
//                                  <label className="label">Photo URL</label>
//                                 <input type="text" className="input" placeholder="Enter Your Photo" name='photo' />
//                                 <label className="label">Password</label>
//                                 <input type="password" className="input" placeholder="Password" name="password" />
//                                 <div><a className="link link-hover">Forgot password?</a></div>
//                                 <button className="btn btn-neutral mt-4">Register</button>
//                             </fieldset>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;




import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import registerLottie from "../../assets/register.json"
import { AuthContext } from '../providers/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';



const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [error, setError] = useState("");
    // console.log(createUser);
    const Navigate = useNavigate();
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
                         Navigate(`${location.state ? location.state : "/"}`)

                    })
                // console.log(user)
                setUser(user)
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
                            className='font-bold text-center mt-4 text-accent'>Already Have An Account ? <Link to='/auth/login' className=' underline text-red-800 '>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;