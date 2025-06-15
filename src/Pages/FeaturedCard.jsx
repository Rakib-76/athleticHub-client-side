import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const FeaturedCard = ({ group, groups, setGroups }) => {
    const {  name,category, photo } = group;
    console.log(group);

    
    return (
        <div>

            <div className="card card-side bg-base-100 shadow-sm p-10 border flex items-center">
                <figure>
                    <img
                        src={photo}
                        alt="Coffee" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Name:{name}</h2>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                <div className="join join-vertical gap-2">
                    {/*   */}
                </div>
            </div>

        </div>

//
    );
};

export default FeaturedCard;