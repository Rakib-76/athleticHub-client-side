import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router'; // ← corrected router import

const Spinner = () => (
    <div className="flex justify-center items-center min-h-[200px]">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
);

const FeaturedEvents = () => {
    const initialEvents = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    const eventsToShow = showAll ? initialEvents : initialEvents.slice(0, 6);

    useEffect(() => {

        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div className="mt-10 p-5">
            <h2 className="text-6xl font-medium mb-6 text-center">Featured Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {eventsToShow.map(event => (
                    <div key={event._id} className="card bg- shadow-xl">
                        <figure className='p-5'>
                            <img src={event.photo} alt={event.name} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{event.name}</h2>
                            <p className="text-sm text-gray-600">Category: {event.category}</p>
                            <p className="text-sm text-gray-600">Location: {event.locate}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detailsEvent/${event._id}`}>
                                    <button className="btn btn-primary">See More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!showAll && initialEvents.length > 6 && (
                <div className="text-center mt-6">
                    <button
                        className="btn btn-outline btn-primary"
                        onClick={() => setShowAll(true)}
                    >
                        See All Events
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedEvents;
