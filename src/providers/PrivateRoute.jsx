import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user);
    const location = useLocation();
    // console.log(location);

    // if(loading) {
    //     return<span className="loading loading-spinner loading-xl"></span>
    // }

    if (user && user?.email){
        return children;
    }
   return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default PrivateRoute;