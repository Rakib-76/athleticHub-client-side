import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router';

const Spinner = () => (
    <div className="flex justify-center items-center min-h-[200px]">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
);

const EventPages = () => {
    const initialEvents = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    const filteredEvents = initialEvents.filter(event =>
        event.name.toLowerCase().includes(searchText.toLowerCase()) ||
        event.location?.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="mt-10 p-5">
            <Helmet>
                <title>Featured-Events</title>
            </Helmet>

            <h2 className="text-3xl font-bold mb-6 text-center">Featured Events</h2>

            {/* Search input */}
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by name or location"
                    className="input input-bordered w-full max-w-md"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <div key={event._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={event.photo} alt={event.name} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{event.name}</h2>
                                <p className="text-sm text-gray-600">Category: {event.category}</p>
                                <p className="text-sm text-gray-500">Location: {event.locate || 'Not specified'}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/detailsEvent/${event._id}`}>
                                        <button className="btn btn-primary">See More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-red-500">No events found.</p>
                )}
            </div>
        </div>
    );
};

export default EventPages;
