import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';




const AuthProvider = ({ children }) => {

    const [token, setToken] = useState("")
    const [role,setRole] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const tkn = localStorage.getItem('Token')
        const getRole = localStorage.getItem('role')
        getRole && setRole(getRole)
        tkn && setToken(tkn)
        setLoading(false)
    }, [token,role,loading])

    const value = { token ,setToken , role,setRole ,loading}
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;