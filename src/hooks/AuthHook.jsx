import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AuthHook = () => {

    const authValue = useContext(AuthContext)
    return authValue;
};

export default AuthHook;