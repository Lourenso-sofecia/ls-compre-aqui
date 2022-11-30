import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/slice/authSlice';


export const showOnLogin = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    if(isLoggedIn)
        return children;
    return null;
};

export  const showOnLogout = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    if(!isLoggedIn)
        return children;
    return null;
};
