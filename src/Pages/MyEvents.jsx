import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { AuthContext } from '../providers/AuthContext';
import { Helmet } from 'react-helmet';

const Spinner = () => (
    <div className="flex justify-center items-center min-h-[200px]">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
);

const MyEvents = () => {
    const { user } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            const email = user.email.toLowerCase();
            fetch(`https://eleventh-assignment-code-server.vercel.app/my-events/?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setEvents(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Error fetching events', err);
                    setLoading(false);
                });
        }
    }, [user]);

    const handleDeleteEvent = (_id) => {
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
                fetch(`https://eleventh-assignment-code-server.vercel.app/events/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your event has been deleted.", "success");
                            const remainingEvents = events.filter(evnt => evnt._id !== _id);
                            setEvents(remainingEvents);
                        }
                    });
            }
        });
    };

    return (
        <div className="p-4 mt-20">
            <Helmet>
                <title>My-Events</title>
            </Helmet>

            <h2 className="text-2xl font-bold mb-6 text-center">My Created Events</h2>

            {loading ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => (
                        <div key={event._id} className="card bg-base-100 shadow-lg border">
                            <figure>
                                <img src={event.photo} alt={event.name} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{event.name}</h2>
                                <p><span className="font-semibold">Date:</span> {event.date}</p>
                                <p><span className="font-semibold">Category:</span> {event.category}</p>
                                <div className="flex justify-between mt-4">
                                    <button onClick={() => handleDeleteEvent(event._id)} className="btn bg-red-600 text-white">Delete</button>
                                    <Link to={`/update-events/${event._id}`}>
                                        <button className="btn bg-[#422ad5] text-white">Update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyEvents;
