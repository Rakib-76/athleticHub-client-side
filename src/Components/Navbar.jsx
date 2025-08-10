import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router'; // use react-router-dom not react-router
import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/login");
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    return (
        <div className="navbar mt-5 max-w-8xl mx-auto sticky top-0 bg-white z-50 rounded-xl mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to="/">
                            <li className='font-bold'><a>Home</a></li>
                        </Link>
                        <Link to="/eventPage">
                            <li className='font-bold'><a>Event Pages</a></li>
                        </Link>

                    {
                        user && (
                            <>
                                    <Link to='/createEvent'>
                                        <li className='font-bold'><a>Create Event</a></li>
                                    </Link>
                                    <Link to='/my-bookings'>
                                        <li className='font-bold'><a>My Bookings</a></li>
                                    </Link>
                                    <Link to='/myevents'>
                                        <li className='font-bold'><a>Manage Events</a></li>
                                    </Link>
                            </>
                        )
                    }
                     </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="https://i.postimg.cc/PrGWb7wM/athletics.png" alt="cube" className='w-10 h-10' />
                    <a className="btn btn-ghost text-xl font-bold -m-4">
                        <span className='text-red-600 text-xl'>Athletix</span><span className='text-blue-700'>Hub</span>
                    </a>
                </div>
            </div>

            {/* Center nav links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-6">
                    <Link to="/">
                        <li className='font-bold'><a>Home</a></li>
                    </Link>
                    <Link to="/eventPage">
                        <li className='font-bold'><a>Event Pages</a></li>
                    </Link>
                    <Link to='/createEvent'>
                        <li className='font-bold'><a>Create Event</a></li>
                    </Link>

                    {user && (
                        <>
                            <Link to='/my-bookings'>
                                <li className='font-bold'><a>My Bookings</a></li>
                            </Link>
                            <Link to='/myevents'>
                                <li className='font-bold'><a>Manage Events</a></li>
                            </Link>
                        </>
                    )}
                </ul>
            </div>

            {/* Right side user avatar & auth buttons */}
            <div className="navbar-end flex items-center gap-4">
                <div className="relative group">
                    {user && user.photoURL ? (
                        <img
                            className="w-10 h-10 rounded-full"
                            src={user.photoURL}
                            alt="User"
                        />
                    ) : (
                        <FaUserCircle className="w-10 h-10 text-gray-600" />
                    )}
                    {user?.displayName && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 z-50">
                            {user.displayName}
                        </div>
                    )}
                </div>

                {user ? (
                    <button className='btn btn-primary px-10' onClick={handleSignOut}>LogOut</button>
                ) : (
                    <Link to='/login'>
                        <button className='btn btn-primary'>Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
