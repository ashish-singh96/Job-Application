import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
    const token = localStorage.getItem('Token');

    if(!token){
        return <Navigate to={'/'}/>
    }
    const role = JSON.parse(localStorage.getItem('Role'));

    if(role === 'recruiter'){
        return <Outlet/>
    }else{
        return <Navigate to={'/'}/>
    }
};
export default PrivateRoute;