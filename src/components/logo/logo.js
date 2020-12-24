import React from 'react';
import {NavLink} from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to="/"> 
                <span className="logo-text">EventASS</span>
            </NavLink>
        </div>
    );
}

export default Logo;