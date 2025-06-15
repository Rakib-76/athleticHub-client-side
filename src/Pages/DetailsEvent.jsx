import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsEvent = () => {
  const event = useLoaderData();
  console.log(event);

  const {
    name,
    category,
    description,
    meetingLocation,
    date,
    photo,
    username,
    email,
  } = event;


  return (
    <div className="card bg-base-100 max-w-96 mx-auto shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Photo"
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name:{name}</h2>
        <p ><span className='font-bold'>Category:</span>{category}</p>
        <p><span className='font-bold'>Description:</span>{description}</p>
        <p><span className='font-bold'>Username:</span>{username}</p>
        <p><span className='font-bold'>Email:</span>{email}</p>
        <p><span className='font-bold'>Date:</span>{date}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsEvent;
