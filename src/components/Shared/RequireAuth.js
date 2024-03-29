import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user, Loading, error] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;