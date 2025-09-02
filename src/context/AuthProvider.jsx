import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';




const AuthProvider = ({ children }) => {

    const [token, setToken] = useState("")

    useEffect(() => {
        const tkn = localStorage.getItem('Token')

        tkn && setToken(tkn)
    }, [token])

    const value = { token ,setToken }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;