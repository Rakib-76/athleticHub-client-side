
import React, { useState, useEffect, useContext } from 'react';

import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthContext';

const UpdateEvents = () => {
    const user = useContext(AuthContext).user;
    const { _id, name, description, photo, date,locate,category: existingCategory } = useLoaderData();

    const categoryOptions = ["Swimming", "Sprinting", "Long Jump", "High Jump", "Running", "Hurdle race"]

    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();



    useEffect(() => {
        setSelectedCategory(existingCategory || '');
    }, [existingCategory]);

    const handleUpdateEvents = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateGroup = Object.fromEntries(formData.entries());

        updateGroup.category = selectedCategory;
        console.log(updateGroup);

        fetch(`https://eleventh-assignment-code-server.vercel.app/events/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myevents');
                }
            });
    };

    return (
        <div className='mt-10 p-10'>
            <h1 className='text-5xl font-bold text-center'>Update a event</h1>

            <form onSubmit={handleUpdateEvents}>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="card-body ">
                        <fieldset className="fieldset">
                            <label className="font-bold">Event Name</label>
                            <input type="text" className="input w-full" placeholder="Enter Your event name" name="name" defaultValue={name} />
                        </fieldset>
                    </div>


                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">Event Type</label>
                            <div className="dropdown w-full">
                                <div tabIndex={0} role="button" className="btn w-full m-1">
                                    {selectedCategory || "Select Event"}
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
                                    {categoryOptions.map((item, i) => (
                                        <li key={i}><a onClick={() => setSelectedCategory(item)}>{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </fieldset>
                    </div>

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">Description</label>
                            <input type="text" className="input w-full" placeholder="Enter description" name="description" defaultValue={description} />
                        </fieldset>
                    </div>


                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">Event Date</label>
                            <input type="date" className="input w-full" name="date" defaultValue={date} />
                        </fieldset>
                    </div>
                    
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">Meeting Location</label>
                            <input type="text" className="input w-full" name="location" defaultValue={locate} />
                        </fieldset>
                    </div>


                     <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">Image URL</label>
                            <input type="text" className="input w-full" placeholder="Photo URL" name="photo" defaultValue={photo} />
                        </fieldset>
                    </div>

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">User Name</label>
                            <input type="text" className="input w-full" name="username" value={user?.displayName || ''} />
                        </fieldset>
                    </div>

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">User Email</label>
                            <input type="email" className="input w-full" name="email" value={user?.email || ''} />
                        </fieldset>
                    </div>

                </div>



                <button className="btn btn-neutral mt-4 w-full">Update</button>
            </form>
        </div>
    );
};

export default UpdateEvents;
