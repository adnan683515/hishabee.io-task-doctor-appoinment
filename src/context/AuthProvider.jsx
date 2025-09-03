import React, { useEffect, useRef, useState } from 'react';
import { AuthContext } from './AuthContext';




const AuthProvider = ({ children }) => {

    const [token, setToken] = useState("")
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const tkn = localStorage.getItem('Token')
        const getRole = localStorage.getItem('role')
        getRole && setRole(getRole)
        tkn && setToken(tkn)
        setLoading(false)
    }, [token, role, loading])


    const contactRef = useRef(null);

    const handleScroll = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const value = { token, setToken, role, setRole, loading ,handleScroll , contactRef }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;