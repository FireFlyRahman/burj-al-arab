import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let location = useLocation()
    return (
        loggedInUser.email ? (
            children
        ) : (
            <Navigate to='/login' state={{from : location}} replace />
        )
    );
};

export default PrivateRoute;