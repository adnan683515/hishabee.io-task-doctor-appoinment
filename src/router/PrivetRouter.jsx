import React, { useEffect } from 'react';
import AuthHook from '../hooks/AuthHook';
import { useNavigate } from 'react-router';
import Loader from '../components/Loader';

const PrivetRouter = ({ children }) => {
    const { role, token, loading } = AuthHook();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && (!role || !token)) {
        
            navigate("/auth/Login");
        }
    }, [role, token, loading, navigate]);

    if (loading) return <div className='min-h-screen flex justify-center items-center'>
        <Loader></Loader>
    </div>;

    if (!role || !token) return null; 

    return children; // load
};

export default PrivetRouter;