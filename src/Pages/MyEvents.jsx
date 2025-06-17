import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../providers/AuthContext';
import { Helmet } from 'react-helmet';

const MyEvents = () => {
    const { user } = useContext(AuthContext);
    // const loadedEvents = useLoaderData();
    // const [events, setEvents] = useState(loadedEvents);
    const [events, setEvents] = useState([]);



    useEffect(() => {
        if (user?.email) {
            const email = user.email.toLowerCase();
            fetch(`https://eleventh-assignment-code-server.vercel.app/my-events/?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setEvents(data);
                    // setLoading(false);
                })
                .catch((err) => {
                    console.error('Error fetching events', err);
                    // setLoading(false);
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
        <div className="p-4">
            <Helmet>
                <title>My-Bookings</title>
            </Helmet>
            <h2 className="text-xl font-bold mb-4 text-center">My Created Events</h2>
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Delete</th>
                        <th className="border px-4 py-2">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event._id}>
                            <td className="border px-4 py-2">{event.name}</td>
                            <td className="border px-4 py-2">{event.date}</td>
                            <td className="border px-4 py-2">{event.category}</td>
                            <td>
                                <button className='btn w-full' onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                            </td>
                            <Link to={`/update-events/${event._id}`} className='w-full'>
                                <td>
                                    <button className='btn w-full'>Update</button>
                                </td>
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyEvents;
