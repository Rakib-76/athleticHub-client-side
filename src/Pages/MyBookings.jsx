import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            const email = user.email.toLowerCase();
            fetch(`https://eleventh-assignment-code-server.vercel.app/bookings?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setBookings(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Error fetching bookings:', err);
                    setLoading(false);
                });
        }
    }, [user]);



    const handleDeleteBooking = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://eleventh-assignment-code-server.vercel.app/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                            const remainingBookings = bookings.filter(book => book._id !== _id);
                            setBookings(remainingBookings);
                        }
                    });
            }
        });
    };

    if (bookings.length === 0) {
        return <p className="text-center mt-10 text-gray-500">No bookings found.</p>;
    }

    return (
        <div className="p-6">

            <Helmet>
                <title>My-Bookings</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mb-8">My Bookings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                    <div key={booking._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={booking.photo}
                                alt={booking.name}
                                className="h-48 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{booking.name}</h2>
                            <p className="text-sm text-gray-600">Category: {booking.category}</p>
                            <p className="text-sm text-gray-600">Date: {booking.date}</p>
                            <p className="text-sm text-gray-600">Booked by: {booking.user_email}</p>
                            <button className='btn' onClick={() => handleDeleteBooking(booking._id)}>Cancel</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
