import React from 'react';
import './defaultRoute.css'
import { useLocation } from 'react-router-dom';

function DefaultHeading() {
    const location = useLocation();

    
    if (location.pathname === '/') {
        return (
           
                <h2>Hello Teja Welcome to Hostel  ... !</h2>
            
        );
    }
    return null;
}

export default DefaultHeading;
