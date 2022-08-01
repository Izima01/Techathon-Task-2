import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    return (!email && !password) ? <Navigate to={'/login'} /> : <Outlet /> ;
}

export default ProtectedRoutes