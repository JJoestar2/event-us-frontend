import React from 'react';
import {NavLink} from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to="/"> 
                <span className="logo-text">EventUS</span>
            </NavLink>
        </div>
    );
}

export default Logo;