import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 mt-20">
      <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
