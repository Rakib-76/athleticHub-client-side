import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router'; 
import { AuthContext } from '../providers/AuthContext';

const Spinner = () => (
  <div className="flex justify-center items-center mt-4">
    <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const DetailsEvent = () => {
  const event = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bookingLoading, setBookingLoading] = useState(false);

  const {
    name,
    category,
    description,
    date,
    photo,
    username,
    email,
  } = event;

  const handleBookNow = () => {
    if (!user || !user.email) {
      alert("Please login to book this event.");
      return;
    }

    const bookingData = { ...event, user_email: user.email };

    setBookingLoading(true); 

    fetch('https://eleventh-assignment-code-server.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Booking successful:', data);
        alert("Booking successful!");
      })
      .catch(err => {
        console.error("Booking error:", err);
        alert("Something went wrong.");
      })
      .finally(() => setBookingLoading(false)); 
  };

  return (
    <div className="card bg-base-100 max-w-96 mx-auto shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Event"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {name}</h2>
        <p><span className="font-bold">Category:</span> {category}</p>
        <p><span className="font-bold">Description:</span> {description}</p>
        <p><span className="font-bold">Username:</span> {username}</p>
        <p><span className="font-bold">Email:</span> {email}</p>
        <p><span className="font-bold">Date:</span> {date}</p>
        <div className="card-actions mt-4">
          <button
            className="btn btn-primary"
            onClick={handleBookNow}
            disabled={bookingLoading}
          >
            {bookingLoading ? "Booking..." : "Book Now"}
          </button>
        </div>

       
        {bookingLoading && <Spinner />}
      </div>
    </div>
  );
};

export default DetailsEvent;
