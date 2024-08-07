import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem('Token');
    const role = localStorage.getItem('Role');

    if (!token) {
        return <Navigate to={'/'} />;
    }

    if (role === 'recruiter') {
        return <Outlet />;
    } else {
        return <Navigate to={'/'} />;
    }
};

export default PrivateRoute;
