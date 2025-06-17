import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const CreateEvent = () => {

    const { user } = useContext(AuthContext);
    const [selectedCategory, setSelectedCategory] = useState("");

    const category = ["Swimming", "Sprinting", "Long Jump", "High Jump", "Running", "Hurdle race"]


    const handleCreateEvent = (e) => {
        e.preventDefault();
        const form = e.target;

        const groupData = {
            name: form.name.value,
            category: selectedCategory,
            description: form.description.value,
            date: form.date.value,
            username: form.username.value,
            email: form.email.value,
            photo: form.photo.value
        };

        console.log(groupData);


        fetch('https://eleventh-assignment-code-server.vercel.app/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(groupData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("after seding data", data);

                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Event create  successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    form.reset();

                }


            })
    };

    return (
        <div className='mt-10 p-10'>
            <Helmet>
                <title>Create-Events</title>
            </Helmet>
            <h1 className='text-5xl font-bold text-center'>Create a event</h1>

            <form onSubmit={handleCreateEvent}>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="card-body ">
                        <fieldset className="fieldset">
                            <label className="font-bold">Event Name</label>
                            <input type="text" className="input w-full" placeholder="Enter Your event name" name="name" />
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
                                    {category.map((item, i) => (
                                        <li key={i}><a onClick={() => setSelectedCategory(item)}>{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </fieldset>
                    </div>

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">Description</label>
                            <input type="text" className="input w-full" placeholder="Enter description" name="description" />
                        </fieldset>
                    </div>


                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="font-bold">Event Date</label>
                            <input type="date" className="input w-full" name="date" />
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

                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="font-bold">Image URL</label>
                        <input type="text" className="input w-full" placeholder="Photo URL" name="photo" />
                    </fieldset>
                </div>

                <button className="btn btn-neutral mt-4 w-full">Create</button>
            </form>
        </div>
    );
};

export default CreateEvent;