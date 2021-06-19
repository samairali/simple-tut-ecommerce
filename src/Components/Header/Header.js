import React from 'react'
import './style.scss'
import Logo from './Logo';
import Menu from './Menu';

export default function Header({currentUser}) {
    
    return (
        <div className="main-header-component">
            <div className="wrap">
                <Logo />
                <Menu />
            </div>
        </div>
    )
}
