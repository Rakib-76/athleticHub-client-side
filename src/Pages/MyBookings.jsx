import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { FaArrowsRotate } from 'react-icons/fa6';
// 🚀 TanStack Query Imports
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Spinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  

  const [viewMode, setViewMode] = useState("table");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  //  TanStack Query Setup
  const queryClient = useQueryClient();
  // Unique Query Key for this specific data set
  const BOOKINGS_QUERY_KEY = ['bookings', user?.email];

  useEffect(() => {
    // Update isMobile on resize (kept the original window resize logic)
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1.USE QUERY: Data Fetching
  const {
    data: bookings, // Renamed 'data' to 'bookings'
    isLoading,    // true while fetching
    isError,      // true if fetch fails
  } = useQuery({
    queryKey: BOOKINGS_QUERY_KEY,
    queryFn: async () => {
      // Ensure user exists before fetching
      if (!user?.email) return [];
      const email = user.email.toLowerCase();

      const res = await fetch(`https://eleventh-assignment-code-server.vercel.app/bookings?email=${email}`);
      if (!res.ok) {
        throw new Error('Failed to fetch bookings');
      }
      return res.json();
    },
    // Query will only run if user.email exists
    enabled: !!user?.email,
  });


  // 2.  USE MUTATION: Data Deletion (Cancel Booking)
  const deleteMutation = useMutation({
    mutationFn: async (_id) => {
      const res = await fetch(`https://eleventh-assignment-code-server.vercel.app/bookings/${_id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete booking');
      }
      return res.json();
    },

    // OPTIMISTIC UPDATE: UI will update immediately
    onMutate: async (deletedId) => {
      await queryClient.cancelQueries({ queryKey: BOOKINGS_QUERY_KEY }); // Cancel any ongoing fetch
      const previousBookings = queryClient.getQueryData(BOOKINGS_QUERY_KEY); // Save current data

      // Optimistically remove the booking from the cache
      queryClient.setQueryData(BOOKINGS_QUERY_KEY, old => old.filter(b => b._id !== deletedId));

      return { previousBookings }; // Return context for onError
    },

    // If mutation fails, rollback the cache
    onError: (err, deletedId, context) => {
      queryClient.setQueryData(BOOKINGS_QUERY_KEY, context.previousBookings);
      Swal.fire("Error!", "Failed to cancel booking. Please check your connection.", "error");
    },

    // Success: show success message
    onSuccess: () => {
      Swal.fire("Cancelled!", "Your booking has been successfully cancelled.", "success");
      // UI already updated in onMutate, no need for manual setBookings()
    }
  });


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
        // 🚀 Call the mutation instead of manual fetch
        deleteMutation.mutate(_id);
      }
    });
  };

  // Error case handling
  if (isError) {
    return <p className="text-center text-red-500 mt-10">Error loading bookings. Please try again.</p>;
  }


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

      {/* USE loading from useQuery & isPending from useMutation */}
      {isLoading || deleteMutation.isPending ? (
        <Spinner />
      ) : bookings?.length === 0 ? ( // Use optional chaining just in case
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        // ... baki rendering logic ...
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
                    disabled={deleteMutation.isPending} // Disable button during mutation
                    onClick={() => handleDeleteBooking(booking._id)}
                  >
                    {deleteMutation.isPending ? 'Cancelling...' : 'Cancel'}
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
                        disabled={deleteMutation.isPending} // Disable button during mutation
                      >
                        {deleteMutation.isPending ? 'Cancelling...' : 'Cancel'}
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