import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router'; // <-- corrected router import

const FeaturedEvents = () => {
    const initialGroups = useLoaderData();
    const [events, setEvents] = useState(initialGroups);

    return (
        <div className="mt-10 p-5">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {events.map(event => (
                    <div key={event._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={event.photo} alt={event.name} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{event.name}</h2>
                            <p className="text-sm text-gray-600">Category: {event.category}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detailsGroup/${event._id}`}>
                                    <button className="btn btn-neutral">See More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedEvents;
