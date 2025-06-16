import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../providers/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>; // or spinner
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
