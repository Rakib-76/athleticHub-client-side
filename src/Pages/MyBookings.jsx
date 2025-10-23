import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { FaArrowsRotate } from 'react-icons/fa6';

const Spinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("table");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Update isMobile on resize
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (user?.email) {
      const email = user.email.toLowerCase();
      fetch(`http://localhost:3000/p/bookings?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching bookings:', err);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDeleteBooking = (_id) => {
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
        fetch(` http://localhost:3000//bookings/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your booking has been deleted.", "success");
              const remaining = bookings.filter(b => b._id !== _id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-20 p-6">
      <Helmet>
        <title>My-Bookings</title>
      </Helmet>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Bookings</h2>

        {/* Only show toggle on non-mobile */}
        {!isMobile && (
          <button
            className="btn btn-sm text-white bg-[#3D83B7] font-bold"
            onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
          >
            <FaArrowsRotate /> Switch to {viewMode === "table" ? "Card" : "Table"} View
          </button>
        )}
      </div>

      {loading ? (
        <Spinner />
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        // If mobile → always card view
        (isMobile || viewMode === "card") ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div key={booking._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={booking.photo}
                    alt={booking.name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{booking.name}</h2>
                  <p className="text-sm text-gray-600">Category: {booking.category}</p>
                  <p className="text-sm text-gray-600">Date: {booking.date}</p>
                  <p className="text-sm text-gray-600">Booked by: {booking.user_email}</p>
                  <button
                    className="btn bg-red-600 text-white"
                    onClick={() => handleDeleteBooking(booking._id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">User Email</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="border px-4 py-2">
                      <img
                        src={booking.photo}
                        alt={booking.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border px-4 py-2">{booking.name}</td>
                    <td className="border px-4 py-2">{booking.category}</td>
                    <td className="border px-4 py-2">{booking.date}</td>
                    <td className="border px-4 py-2">{booking.user_email}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleDeleteBooking(booking._id)}
                        className="btn btn-sm bg-red-600 text-white"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default MyBookings;
