import React from 'react';
import HeaderLogo from './../../assets/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <div className="logo">
                <Link to='/'>
                    <img src={HeaderLogo} alt="simple tut logo" />
                </Link>
            </div>
        </>
    );
}

export default Logo;
